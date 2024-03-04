import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/Pages/HomePage';
import Footer from '../customer/components/Footer/Footer';
import Navigation from '../customer/components/Navigation/Navigation';
import AllProducts from '../customer/components/Products/AllProducts';
import ProductDetails from '../customer/components/ProductDetail/ProductDetails'
import Cart from '../customer/components/Cart/Cart';
import Checkout from '../customer/components/Checkout/Checkout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../customer/components/Store/ProductSlice';

function CustomerRoutes() {
    const search = useSelector((state) => state.searchVal)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        console.log(search.val, "./././././././.")
        dispatch(fetchProducts(search.val)); // Dispatch the action using useDispatch
    }, [search]);


    return (
        <div className='flex flex-col min-h-screen'>
            <Navigation />
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-indigo-600 border-opacity-75"></div>
                </div>
            )}
            <div className='z-10 flex-grow'>
                <Routes>
                    <Route path='/*' element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/products/' element={<ProductDetails />} />
                    <Route path='allProducts/:lavelOne/:lavelTwo/:lavelThree' element={<AllProducts />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default CustomerRoutes;
