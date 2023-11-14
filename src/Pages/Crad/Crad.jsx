import React from 'react'
import "./Crad.scss"

const Crad = () => {
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
            </div>
        </section>
    )
}

export default Crad