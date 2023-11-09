import * as React from 'react'
import { newsData } from '../../../../Data/Data'
import './News.scss'

export default function News() {
    return (
        <section className='news'>
            <div className='container'>
                <h2 className='container__title'>News</h2>
                <ul className='container__list'>
                    {
                        newsData?.map((e) => (
                            <li key={e.id} className='container__list__item'>
                                <img src={e.img} alt="" />
                                <div className="container__list__item__div">
                                    <b>{e.name}</b>
                                    <p>от {e.price} $</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
} 
