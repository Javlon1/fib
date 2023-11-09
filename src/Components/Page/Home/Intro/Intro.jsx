import * as React from 'react'
import { Link } from 'react-router-dom';
import './Intro.scss'

export default function Intro() {
    return (
        <section className='intro'>
            <div className='container'>
                <div className="container__left">
                    <h2 className='container__left__title'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing.undefined
                    </h2>
                    <p className='container__left__text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos pariatur ab, praesentium cum, excepturi animi saepe ex nam aspernatur
                    </p>
                    <Link className='container__left__btn'>
                        FREE CONSULTATION
                        <i className="bi bi-arrow-right-short"></i>
                    </Link>
                </div>
                <div className="container__right">
                    <img className='container__right__img' src='' alt="" />
                </div>
            </div>
        </section>
    )
}