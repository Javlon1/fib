import * as React from 'react'
import './Intro.scss'

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { sliderData } from '../../../../Data/Data';

export default function Intro() {
    return (
        <section className='intro'>
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={2}
                    // autoplay={{
                    //   delay: 2500,
                    //   disableOnInteraction: false,
                    // }}
                >
                    {
                        sliderData?.map((e) => (
                            <SwiperSlide key={e.id}>
                                <div className='container__swiper'>
                                    <img src={e.img} alt="" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
} 