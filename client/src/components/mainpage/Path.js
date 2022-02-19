import React, {useContext} from 'react'
import {Routes,Route} from 'react-router-dom'
import { GlobalState } from "../../GlobalState";
//Products
import HomePage from './HomePage/HomePage'
import ProductDetail from './ProductDetail/ProductDetail'

//Authentication
import Login from './Account/Authentication/Login'
import Register from './Account/Authentication/Register'

//User Information
import User from './Account/User'

//Password Change
import ForgotPass from './Account/PasswordChange/Forgot'
import ChangePass from './Account/PasswordChange/Change'

//Shopping
import Cart from './Cart/Cart'
import Checkout from './Cart/Checkout'

//Order
import Purchased from './Account/Order/Purchased/Purchased'
import Pending from './Account/Order/Pending/Pending'

//Admin
import ModifyProduct from './Admin/HandleProduct/ModifyProduct'

//Other
import NotFound from './Other/NotFound/NotFound';
export default function Path() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged

    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>


            <Route path='/account/login' element={<Login/>}/>
            <Route path='/account/register' element={<Register/>}/>


            <Route path='/account' element={<User/>}/>


            <Route path='/account/forgot-password' element={<ForgotPass/>}/> //Cannot Login
            <Route path='/account/change-password' element={<ChangePass/>}/> //Can Login


            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>


            <Route path='/account/order/history' element={<Purchased/>}/>
            <Route path='/account/order/pending' element={<Pending/>}/>


            <Route path='/admin/modify-product' element={<ModifyProduct/>}/>
            
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}