import React from 'react'
import foto from '../../../media/herophoto.jpg'
import '../BestSeller/BestSeller.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BestSeller = () => {
    return (
        <>
            <div className='best-sellers__wrapper'>
                <div className="container">
                    <div className="row">
                        <h6>Popular item in the market</h6>
                        <h2>Best Sellers</h2>

                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={4}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="col-3 card-wrapper ">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={foto} class="card-img-top" alt="" />
                                        <div class="card-body" style={{ textAlign: "center" }}>
                                            <h6>Accessories</h6>
                                            <h4>Tissot</h4>
                                            <h4>$150.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-3 card-wrapper ">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={foto} class="card-img-top" alt="" />
                                        <div class="card-body" style={{ textAlign: "center" }}>
                                            <h6>Accessories</h6>
                                            <h4>Tissot</h4>
                                            <h4>$150.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-3 card-wrapper ">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={foto} class="card-img-top" alt="" />
                                        <div class="card-body" style={{ textAlign: "center" }}>
                                            <h6>Accessories</h6>
                                            <h4>Tissot</h4>
                                            <h4>$150.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-3 card-wrapper ">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={foto} class="card-img-top" alt="" />
                                        <div class="card-body" style={{ textAlign: "center" }}>
                                            <h6>Accessories</h6>
                                            <h4>Tissot</h4>
                                            <h4>$150.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-3 card-wrapper ">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={foto} class="card-img-top" alt="" />
                                        <div class="card-body" style={{ textAlign: "center" }}>
                                            <h6>Accessories</h6>
                                            <h4>Tissot</h4>
                                            <h4>$150.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-3 card-wrapper ">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={foto} class="card-img-top" alt="" />
                                        <div class="card-body" style={{ textAlign: "center" }}>
                                            <h6>Accessories</h6>
                                            <h4>Tissot</h4>
                                            <h4>$150.00</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller