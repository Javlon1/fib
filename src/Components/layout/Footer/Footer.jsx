import React from 'react';
import "./Footer.scss";
import logo from "../../../Assets/Img/logo.png";
import { Link } from 'react-router-dom';
import { FooterData } from '../../../Data/Data';
import { Context } from '../../../Context/Context';
import Language from '../../Ui/Language/Language';

export default function Footer() {

    const { lan, setMenu } = React.useContext(Context)

    return (
        <footer className='footer'>
            <div className="container">
                <div className="container__top">
                    <Link to='/'
                        onClick={() => {
                            setMenu(1)
                            sessionStorage.setItem('menu', 1)
                        }}>
                        <img className='logo' src={logo} alt="logo" />
                    </Link>

                    <h6 className='container__top__title'>Остались вопросы? А мы всегда на связи:</h6>

                    <div className='container__top__div'>
                        <Link
                            to={`tel:${905251243}`}
                            className='container__top__div__number'
                        >
                            905251243
                        </Link>

                        <Language />
                    </div>

                    <ul className='container__top__list'>
                        {
                            FooterData?.map((e) => (
                                <Link key={e.id} to={e.link}>
                                    <li className='container__top__list__item'>
                                        <i className={e.icon}></i>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>

            </div>

            <div className='footer__botomm'>
                <p>Jonny Все праав защищены © 2023</p>
            </div>
        </footer>
    )
}
