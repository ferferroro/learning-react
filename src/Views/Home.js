import React, {useState, useEffect} from 'react';
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home() {

    const url = `https://5f79b69ce402340016f93314.mockapi.io/api/v1/ProductList?page=1&limit=10`;
    
    let content = null;

    let products = useAxiosGet(url)

    if(products.error) {
        content = <p>
            There was an error!
        </p>
    }

    if(products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content = 
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard 
                        product={product}
                    />
                </div>
            )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>

            { content }
            {/* <HelloWorld name="Omeng" /> */}
        </div>
    )
}

export default Home;