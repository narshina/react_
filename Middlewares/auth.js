import jwt from 'jsonwebtoken';


let verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Authorization token missing" });
        }

        const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
        const decoded = jwt.verify(token, "abc"); // Verify the token using the secret key
        req.user = decoded; // Attach the decoded token data to the request object
        console.log("Token verified:", decoded);
        next();
    } catch (e) {
        res.status(401).json({ message: "Invalid or expired token", error: e.message });
        console.log("Token verification failed:", e.message);
    }
};


export default verifyToken