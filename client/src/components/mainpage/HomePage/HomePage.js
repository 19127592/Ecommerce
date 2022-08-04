import React,{useContext,useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from './ProductBoxUI/ProductItem'
import { Link } from "react-router-dom";
export default function Homepage() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [search, setSearch] = state.productsAPI.search
    const [users] = state.userAPI.users
    console.log(products)
    return (
        <>
        <div>DÁN MÀN HÌNH</div>
        <div className='products'>
            {
                products.map(product => {
                    if (product.category == 'screen protector'){
                        console.log(product)
                        return <ProductItem key={product._id} product={product}/>
                    }
                    
                })
                
            }
        </div>
        <div><Link to="/collection/screen protector">Xem thêm</Link></div>

        <div>CÁP, SẠC ĐIỆN THOẠI</div>
        <div className='products'>
            {
                products.map(product => {
                    if (product.category == 'phone charger'){
                        return <ProductItem key={product._id} product={product}/>
                    }
                    
                })
            }
        </div>
        <div><Link to="/collection/phone charger">Xem thêm</Link></div>

        <div>PIN DỰ PHÒNG</div>
        <div className='products'>
            {
                products.map(product => {
                    if (product.category == 'backup charger'){
                        return <ProductItem key={product._id} product={product}/>
                    }
                    
                })
            }
        </div>
        <div><Link to="/collection/backup charger">Xem thêm</Link></div>

        <div>TAI NGHE</div>
        <div className='products'>
            {
                products.map(product => {
                    if (product.category == 'headphone'){
                        return <ProductItem key={product._id} product={product}/>
                    }
                    
                })
            }
        </div>
        <div><Link to="/collection/headphone">Xem thêm</Link></div>

        <div>ỐP LƯNG</div>
        <div className='products'>
            {
                products.map(product => {
                    if (product.category == 'phone case'){
                        return <ProductItem key={product._id} product={product}/>
                    }
                })
            }
        </div>
        <div><Link to="/collection/phone case">Xem thêm</Link></div>
        </>
    )
}