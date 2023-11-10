import * as React from 'react'
import { newsData } from '../../../../Data/Data'
import './News.scss'

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function News() {
    return (
        <section className='news'>
            <div className='container'>
                <h2 className='container__title'>News</h2>
                <ul className='container__list'>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                              slidesPerView: 2,
                              spaceBetween: 20
                            },
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 40
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1000: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {
                            newsData?.map((e) => (
                                <SwiperSlide key={e.id}>
                                    <li key={e.id} className='container__list__item'>
                                        <img src={e.img} alt="" />
                                        <div className="container__list__item__div">
                                            <b>{e.name}</b>
                                            <p>от {e.price} $</p>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </ul>
            </div>
        </section>
    )
} 
