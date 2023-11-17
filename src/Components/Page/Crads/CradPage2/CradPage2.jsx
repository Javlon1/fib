import * as React from 'react'
import { Link } from 'react-router-dom'
import './CradPage2.scss'


export default function CradPage2() {
    return (
        <section className='cradPage2'>
            <div className='container'>
                <div className='container__step'>
                    <h4 className='container__step__title'>Заказ на доставку</h4>
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

                <div>
                    
                </div>

                <div className="container__bottom">
                    <div className="container__bottom__left">
                        <Link to='/card'>
                            <i className="bi bi-chevron-left"></i>
                            <p>Вернуться в магазин</p>
                        </Link>
                    </div>
                    <div className="container__bottom__right">
                        <Link to='/card2' className='container__bottom__right__a'>
                            Оформить заказ
                            <i className="bi bi-chevron-right"></i>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
