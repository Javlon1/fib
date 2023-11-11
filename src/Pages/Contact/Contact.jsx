import React from 'react'
import "./Contact.scss"
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className='contact'>
            <div className="container">
                <div className="container__item">
                    <Link
                        to={`tel:${905251243}`}
                        className='container__item__number'
                    >
                        905251243
                    </Link>
                    <h3 className='container__item__addr'>
                        ул. Проспект Вернадского 86В
                    </h3>
                    <p className='container__item__clock'>Доставка и самовывоз 10:00 — 23:00</p>
                </div>
                <div className="container__map">
                    <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4876.99878707187!2d72.3288522771734!3d40.739349435939225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced2ca7c5470d%3A0x94dd6d4ba9d395e1!2z0YPQu9C40YbQsCDQnNGD0YHRgtCw0LrQuNC70LvQuNC6IDIsINCQ0L3QtNC40LbQsNC9LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1689419610812!5m2!1sru!2s`} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
