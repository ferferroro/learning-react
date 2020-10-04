import React from 'react';
import { Link, useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests';

function Product() {

    const { id } = useParams()
    const url = `https://5f79b69ce402340016f93314.mockapi.io/api/v1/ProductList/${id}`;

    let content = null;

    let product = useAxiosGet(url)

    if(product.error) {
        content = <p>
            There was an error!
        </p>
    }

    if(product.loading) {
        content = <Loader />
    }
    
    if (product.data) {
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
                <div>
                    <img
                        src={product.data.images}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    P { product.data.price }
                </div>
                <div>
                    {product.data.description}
                </div>

                
            </div>

            
    }
    
    return (
        <div>
            <h1> { content } </h1>
            <Link 
                to={`/`}
                className="bg-blue-500 text-white p-2 flex justify-center"
            >
                Back to Homepage
            </Link>
        </div>
    )
    
}

export default Product