import * as React from 'react'
import './Profil.scss'


export default function Profil() {
    return (
        <section className='profilSection'>
            <div className='container'>
                <h3>Profil</h3>
                <div className="container__left">
                    <form className='container__left__form' action="#">
                        <div className="container__left__form__items">
                            <p>Full Name</p>
                            <span>
                                <input type="text" defaultValue={'javlon mukhammadjonov'} />
                            </span>
                        </div>
                        <div className="container__left__form__items">
                            <p>Number</p>
                            <span>
                                <input type="text" defaultValue={'998905251243'} />
                            </span>
                        </div>
                        <button className='container__left__form__btn' type='submit'>Save Changes</button>
                    </form>
                </div>
                <div className="container__right">f</div>
            </div>
        </section>
    )
}
