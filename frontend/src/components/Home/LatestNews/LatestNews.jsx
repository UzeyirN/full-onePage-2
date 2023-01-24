import React from 'react'
import '../LatestNews/LatestNews.css'
import '../LatestNews/LatestNewsCard.css'
import foto from '../../../media/herophoto.jpg'

const LatestNews = () => {
    return (
        <>
            <div className='latest-wrapper'>
                <div className="container">
                    <div className="row">
                        <h6>Popular item in the market</h6>
                        <h2>Latest News</h2>
                        <div className="col-4 card-wrapper ">
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={foto} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 card-wrapper">
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={foto} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 card-wrapper">
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={foto} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" class="btn btn-primary">read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestNews