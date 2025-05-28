import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../customer/pages/Home/Home'
import Wishlist from '../customer/pages/Wishlist/Wishlist'
import SearchProducts from '../customer/pages/Search/SearchProducts'
import { useAppDispatch, useAppSelector } from '../State/Store'
import { fetchUserCart } from '../State/customer/CartSlice'
import { getWishlistByUserId } from '../State/customer/WishlistSlice'
import Navbar from '../customer/components/Navbar/Navbar'
import Footer from '../customer/components/Footer/Footer'
import Cart from '../customer/pages/Cart/Cart'
import Address from '../customer/pages/Account/Address'
import Auth from '../customer/pages/Auth/Auth'
import PaymentSuccessHandler from '../customer/pages/Pyement/PaymentSuccessHandler'
import NotFound from '../customer/pages/NotFound/NotFound'
import Products from '../customer/pages/Products/Products'
import WriteReviews from '../customer/pages/Reviews/WriteReview'
import ProductDetails from '../customer/pages/PageDetails/ProductDetails'
import Account from '../customer/pages/Account/Account'
import Review from '../customer/pages/Reviews/Review'


const CustomerRoutes = () => {

    const dispatch = useAppDispatch();
    const { auth } = useAppSelector(store => store);

    useEffect(() => {
        dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
        dispatch(getWishlistByUserId())
    }, [auth.jwt, dispatch]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products/:categoryId' element={<Products />} />
                <Route path='/search-products' element={<SearchProducts />} />
                <Route path='/reviews/:productId' element={<Review />} />
                <Route path='/reviews/:productId/create' element={<WriteReviews />} />
                <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/checkout/address' element={<Address />} />
                <Route path='/account/*' element={<Account />} />
                <Route path='/login' element={<Auth/>} />
                <Route path='/payment-success/:orderId' element={<PaymentSuccessHandler/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )

    
}

export default CustomerRoutes