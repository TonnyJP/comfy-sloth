import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ProductsProvider} from './context/products_context';
import {FilterProvider} from './context/filter_context';
import {CartProvider} from './context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
    <QueryClientProvider client={queryClient}>
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider>
        </ProductsProvider>
    </QueryClientProvider>
);
