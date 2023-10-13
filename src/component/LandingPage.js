import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const LandingPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const url="https://fakestoreapi.com/products?sort=desc";
        axios.get(url).then((response)=>{
            setData(response.data);
            
            setIsLoading(false);
        }).catch((error)=>{
            setError(error);
            setIsLoading(false);
        })
    },[]);
    
  return (
    <>
        <div className="container">
        <header className="bg-dark text-white p-4">
            <h1>Welcome to Our E-commerce Store</h1>
            <p>Your one-stop shop for all your favorite products.</p>
        </header>
        <section className="mt-4">
            <div className="container">
                <div className="row">
                    
                        {data.map((item, index)=>(
                            
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="card w-100 h-100 justify-content-center align-items-center">
                                    <div className="card-body">
                                        <img src={item.image} className="card-img-top" class="w-50 h-50"/>
                                        <h5 className="card-title">{item.title}</h5>
                                        
                                        <button className="btn btn-outline-secondary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                    
                </div>
            </div>
        </section>
        <section className="mt-4 text-center">
            <h2>Explore Our Products</h2>
            <button className="btn btn-primary btn-lg">Shop Now</button>
        </section>
        <footer className="bg-dark text-white p-2 mt-4 text-center">
            &copy; 2023 E-commerce Store
        </footer>
        </div>
    </>
  )
}
