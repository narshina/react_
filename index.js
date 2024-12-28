import express from 'express';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

connectDB();
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization token missing or malformed' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, 'abc'); // Ensure 'abc' matches the token signing secret
        console.log(decoded, 'Decoded Token');
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
};

app.get('/api/view/:id', verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const user = await user.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
