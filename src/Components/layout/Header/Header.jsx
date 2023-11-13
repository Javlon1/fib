import * as React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import { HeaderData } from '../../../Data/Data'
import { Context } from '../../../Context/Context';
import logo from "../../../Assets/Img/logo.png"

export default function Header() {

    const { lan, menu, setMenu } = React.useContext(Context)
    const [scrol, setScrol] = React.useState(false)
    const [nav, setNav] = React.useState(false)
    const [drop, setDrop] = React.useState(false)
    const offSet = 80;

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        if (getTop() > offSet) {
            setScrol(true)
        } else {
            setScrol(false)
        }
    })

    setMenu(HeaderData[menu - 1].id)

    return (
        <header className={scrol ? 'header' : 'header'}>
            <div className="container">

                <div className="container__top">
                    <div className="container__top__item">
                        <Link to='/'
                            onClick={() => {
                                setMenu(1)
                                sessionStorage.setItem('menu', 1)
                            }}>
                            <img className='logo' src={logo} alt="logo" />
                        </Link>
                        <ul className='list'>
                            <li className='list__top'>
                                <p>Доставка Еды</p>
                                <span>Андижан</span>
                            </li>
                            <li className='list__item'>
                                <p>время доставки</p>
                                <i className="bi bi-dot"></i>
                                <p>от 31 мин</p>
                            </li>
                        </ul>
                    </div>

                    <div className='container__top__info'>
                        <Link
                            to={`tel:${905251243}`}
                            className='container__top__info__number'
                        >
                            905251243
                        </Link>
                        <div className='container__top__info__btn'>
                            <p>корзинка</p>
                            <span>1</span>
                        </div>
                        <div onClick={() => setNav(!nav)} className={nav ? 'container__top__info__btnHam active-Ham' : 'container__top__info__btnHam'}></div>
                    </div>
                </div>

                <nav className='container__nav'>
                    <ul className={nav ? 'container__nav__list active-nav' : 'container__nav__list'}>
                        {
                            HeaderData?.map((e) => (
                                <Link key={e.id} to={e.link}>
                                    <li className={`${menu === e.id ? 'container__nav__list__item active' : 'container__nav__list__item'}`}
                                        onClick={() => {
                                            setMenu(e.id)
                                            sessionStorage.setItem('menu', e.id)
                                        }}>
                                        {e[`nav_${lan}`]}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    <div className='container__nav__btn'

                        onClick={() => {
                            setDrop(!drop)
                        }}
                    >
                        <p>корзинка</p>
                        <span>1</span>
                    </div>
                    <div className={drop ? "dropdown open__menu" : "dropdown"}>
                        <ul className='list'>
                            {
                                <li className="list__item">
                                    <img className='list__item__img' src="" alt="" />
                                    <div className='list__item__list'>
                                        <span className='list__item__list__title'>
                                            <p>С креветками и трюфелями</p>
                                            <b>
                                                <i className="bi bi-x-lg"></i>
                                            </b>
                                        </span>
                                        <span className='list__item__list__cuant'>
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
                                        </span>
                                    </div>
                                </li>
                            }
                        </ul>
                        <span className='dropdown__totalPrice'>
                            <p>Сумма заказа</p>
                            <b>120 $</b>
                        </span>
                        <button className='dropdown__btn'>Оформить заказ</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}