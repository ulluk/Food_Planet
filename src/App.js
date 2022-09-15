import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import './App.css';
import ProductForm from "./components/ProductForm/ProductForm";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
    return (
        <BrowserRouter>
            {/*<HeaderNav/>*/}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/cart" element={<ShoppingCart/>}/>
                <Route path="/form" element={<ProductForm/>}/>
            </Routes>
            {/*<Footer/>*/}
            <Routes>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
