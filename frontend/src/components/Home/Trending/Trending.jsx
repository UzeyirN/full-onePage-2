import React, { useEffect, useState } from 'react'
import '../Trending/Trending.css'
import '../Trending/Trending-card.css'
import foto from '../../../media/herophoto.jpg'

const Trending = () => {

    const [products, setProducts] = useState(null);
    const getData = () => {
        return fetch('http://localhost:3035/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className='trending-wrapper'>
                <div className="container">
                    <div className="row">
                        <h6>Popular item in the market</h6>
                        <h2>Trending Product</h2>

                        {
                            products?.map((product) => (
                                <div className="col-3 card-wrapper ">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <div style={{overFlow:"hidden"}}>
                                            <img style={{ width: "100%", height: "100%" }} src={product.image} class="card-img-top" alt="" />

                                        </div>
                                        <div class="card-body" style={{ textAlign: "center" }}>
                                            <h6>{product.category}</h6>
                                            <h4>{product.brend}</h4>
                                            <h4>${product.value}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending