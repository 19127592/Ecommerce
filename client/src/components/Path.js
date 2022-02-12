import React, {useContext} from 'react'
import {Switch,Route} from 'react-router-dom'

//Products
import HomePage from './mainpage/HomePage/HomePage'
import ProductDetail from './mainpage/ProductDetail/ProductDetail'

//Authentication
import Login from './mainpage/Account/Authentication/Login'
import Register from './mainpage/Account/Authentication/Register'

//User Information
import User from './mainpage/Account/User'

//Password Change
import ForgotPass from './mainpage/Account/PasswordChange/Forgot'
import ChangePass from './mainpage/Account/PasswordChange/Change'

//Shopping
import Cart from './mainpage/Cart/Cart'
import Checkout from './mainpage/Cart/Checkout'

//Order
import Purchased from './mainpage/Account/Order/Purchased'
import Pending from './mainpage/Account/Order/Pending'

export default function Path() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged

    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/products/:id' exact component={ProductDetail}/>


            <Route path='/account/login' exact component={Login}/>
            <Route path='/account/register' exact component={Register}/>


            <Route path='/account' exact component={User}/>


            <Route path='/account/forgot-password' exact component={ForgotPass}/> //Cannot Login
            <Route path='/account/change-password' exact component={ChangePass}/> //Can Login


            <Route path='/cart' exact component={Cart}/>
            <Route path='/checkout' exact component={Checkout}/>


            <Route path='/account/order/history' exact component={Purchased}/>
            <Route path='/account/order/pending' exact component={Pending}/>


            <Route path='/user-management' exact component/>
            <Route path='/product-management' exact component/>
            <Route path='/product-management/create-product' exact component/>
            
        </Switch>
    )
}