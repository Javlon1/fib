import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import "./Crad.scss"

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { newsData } from '../../Data/Data';
import img from "../../Assets/Img/pizza1.png"

const Crad = () => {

    const { setMenu } = useContext(Context)

    const deleteItem = () => {
        console.log("del");
    }

    return (
        <section className='card'>
            <div className="container">
                <div className='container__step'>
                    <h4 className='container__step__title'>Корзина</h4>
                    <span className='container__step__list'>
                        <ul>
                            <li>
                                <b>1</b>
                                <p>Корзина</p>
                            </li>
                            <li>
                                <b>2</b>
                                <p>Оформление заказа</p>
                            </li>
                            <li>
                                <b>3</b>
                                <p>Заказ принят</p>
                            </li>
                        </ul>
                    </span>
                </div>
                <ul className='container__list'>
                    {
                        <>
                            <li className='container__list__item'>
                                <img src={img} alt="img" />
                                <div className="container__list__item__text">
                                    <h5>С креветками и трюфелями</h5>
                                    <p>Домашнаяя паста феттуччине, сливочный соус,  креветки, трюфельное масло, черный перец, пармезан.350 г</p>
                                </div>
                                <div className="container__list__item__price">
                                    <ul>
                                        <li>
                                            <i className="bi bi-dash"></i>
                                        </li>
                                        <b>1</b>
                                        <li>
                                            <i className="bi bi-plus"></i>
                                        </li>
                                    </ul>
                                    <p className="price">120 $</p>
                                </div>
                                <span onClick={deleteItem} className='container__list__item__x'>
                                    <i className="bi bi-x-lg"></i>
                                </span>
                            </li>
                            <li className='container__list__item'>
                                <img src={img} alt="img" />
                                <div className="container__list__item__text">
                                    <h5>С креветками и трюфелями</h5>
                                    <p>Домашнаяя паста феттуччине, сливочный соус,  креветки, трюфельное масло, черный перец, пармезан.350 г</p>
                                </div>
                                <div className="container__list__item__price">
                                    <ul>
                                        <li>
                                            <i className="bi bi-dash"></i>
                                        </li>
                                        <b>1</b>
                                        <li>
                                            <i className="bi bi-plus"></i>
                                        </li>
                                    </ul>
                                    <p className="price">120 $</p>
                                </div>
                                <span onClick={deleteItem} className='container__list__item__x'>
                                    <i className="bi bi-x-lg"></i>
                                </span>
                            </li>
                        </>
                    }
                </ul>
                <div className='container__order'>
                    <h5 className='container__order__title'>Добавить к заказу?</h5>

                    <ul className='container__order__list'>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                420: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            {
                                newsData?.map((e) => (
                                    <SwiperSlide key={e.id}>
                                        <li key={e.id} className='container__order__list__item'>
                                            <img src={e.img} alt="" />
                                            <div className="container__order__list__item__div">
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
                <div className='container__others'>
                    <h5 className='container__others__title'>Соусы к бортикам и закускам</h5>

                    <ul className='container__others__list'>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={2}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                380: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                640: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                1000: {
                                    slidesPerView: 6,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            {
                                newsData?.map((e) => (
                                    <SwiperSlide key={e.id}>
                                        <li key={e.id} className='container__others__list__item'>
                                            <img src={e.img} alt="" />
                                            <b>{e.name}</b>
                                            <p>от {e.price} $</p>
                                        </li>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </ul>
                </div>
                <div className="container__bottom">
                    <div className="container__bottom__left">
                        <div className='container__bottom__left__div'></div>
                        <Link to='/'
                            onClick={() => {
                                setMenu(1)
                                sessionStorage.setItem('menu', 1)
                            }}>
                            <i className="bi bi-chevron-left"></i>
                            <p>Вернуться в магазин</p>
                        </Link>
                    </div>
                    <div className="container__bottom__right">
                        <span className='container__bottom__right__tatalPrice'>
                            <p>Сумма заказа:</p>
                            <b>1 048 $</b>
                        </span>
                        <Link to='/'
                            onClick={() => {
                                setMenu(1)
                                sessionStorage.setItem('menu', 1)
                            }}>
                            Оформить заказ
                            <i className="bi bi-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Crad