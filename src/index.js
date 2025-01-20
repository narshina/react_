import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Files } from './Files';
import { File } from './File';
import { Parent } from './Parent';
import { Team } from './Team';
import { Mapping } from './Mapping';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { New } from './New';
import { Effect } from './Effect';
import { Bg } from './Bg';
import { Fetch } from './Fetch';
import { Datafetching } from './Datafetching';
import { Form } from './form';
import { Weather } from './Weather';
import { Detail } from './Detail';
import { Movie } from './Movie';
import { ThemeProvider } from 'react-bootstrap';
import { Themeprovider } from './Themeprovider';
import Key from './Key';
import Main from './rendering/Main';
import Calculator from './Calculator';
import { View } from './View';
import { Viewdetail } from './Viewdetail';
import Login from './Login';
import { Count } from './redux/Count';
import { Provider } from 'react-redux';
import store from './redux/counterstore';
import { Addimage } from './Addimage';
import Vimage from './Vimage';
import { Viewprofile } from './Viewprofile';
import Parent1 from './parent1';
import { Toaster } from 'react-hot-toast';
import Addresort from './user/Addresort';
import Vresort from './user/Vresort';
import { AddVideo } from './video';
import Vvideo from './Vvideo';
import Chat from './chat/Msg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Mapping/>}></Route>
    <Route path='/file' element={<File/>}></Route>
    <Route path='/new' element={<New/>}></Route>
    <Route path='/effect' element={<Effect/>}></Route>
    <Route path='/bg' element={<Bg/>}></Route>
    <Route path='/fetch' element={<Fetch/>}></Route>
    <Route path='/datafetch' element={<Datafetching/>}></Route>
    <Route path='/form' element={<Form/>}/>
    <Route path='/app' element={<Weather/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
    <Route path='/movie' element={<Movie/>}/>
    <Route path='/key' element={<Key/>}/>
    <Route path='/calc' element={<Calculator/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/update/:id' element={<Viewdetail/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/im' element={<Addimage/>}/>
    <Route path='/vm' element={<Vimage/>}/>
    <Route path='/vprofile' element={<Viewprofile/>}/>
    <Route path='/p' element={<Parent1/>}/>
    <Route path='/addresort' element={<Addresort/>}/>
    <Route path='/vresort' element={<Vresort/>}/>
    <Route path='/addvideo' element={<AddVideo/>}/>
    <Route path='/vvideo' element={<Vvideo/>}/>
    <Route path='/chat' element={<Chat/>}/>




    <Route path='*' element={<div>route note found</div>}/>

    </Routes>
    </BrowserRouter>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>

// {/* <Provider store={store}>
// <Count/>
// </Provider> */}
  
    
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
