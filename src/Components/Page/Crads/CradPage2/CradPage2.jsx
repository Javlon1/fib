import * as React from 'react'
import { Link } from 'react-router-dom'
import './CradPage2.scss'


export default function CradPage2() {

    const sentFood = () => {

        console.log("ok");
    }

    return (
        <section className='cradPage2'>
            <div className='container'>

                <form onSubmit={sentFood} action="#">

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

                    <div className='container__center'>
                        <div className="container__center__left">
                            <span>
                                <p>Имя</p>
                                <input type="text" required />
                            </span>
                            <span>
                                <p>Номер телефона</p>
                                <input type="number" defaultValue={"9989"} required />
                            </span>
                            <span>
                                <p>Адрес доставки</p>
                                <textarea type="text" required />
                            </span>
                            <div>
                                <p>Время доставки</p>
                                <span>
                                    <select name="" id="">
                                        <option value="">kiofwe</option>
                                        <option value="">kiofwe 4564</option>
                                        <option value="">4564 kiofwe</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="container__center__right">
                            <h5 className='container__center__right__title'>Состов заказа</h5>
                            <ul className='container__center__right__list'>
                                {
                                    <li className='container__center__right__list__item'>
                                        <span>
                                            <h5 className='container__center__right__list__item__name'>Кломбо</h5>
                                            <p className='container__center__right__list__item__text'>Средняя 30 см, традиционное тесто</p>
                                        </span>
                                        <b className='container__center__right__list__item__price'>599 $</b>
                                    </li>
                                }
                            </ul>
                            <span className='container__center__right__price'>
                                <p>Сумма заказа</p>
                                <b>1 048 $</b>
                            </span>
                            <p className='container__center__right__text'>Беспалтная доставка</p>
                        </div>
                    </div>

                    <div className="container__bottom">
                        <div className="container__bottom__left">
                            <Link to='/card'>
                                <i className="bi bi-chevron-left"></i>
                                <p>Вернуться в магазин</p>
                            </Link>
                        </div>
                        <div className="container__bottom__right">
                            <button type='submit' className='container__bottom__right__a'>
                                Отправить заказ
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </section>
    )
}
