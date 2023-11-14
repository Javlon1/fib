import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import "./Crad.scss"

const Crad = () => {
    const { setMenu } = useContext(Context)
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
                    <li className='container__list__item'>

                    </li>
                    <li className='container__list__item'>

                    </li>
                </ul>
                <div className='container__order'>
                    <h5 className='container__order__title'>Добавить к заказу?</h5>
                </div>
                <div className='container__others'>
                    <h5 className='container__others__title'>Соусы к бортикам и закускам</h5>
                </div>
                <div className="container__bottom">
                    <div className="container__bottom__left">
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