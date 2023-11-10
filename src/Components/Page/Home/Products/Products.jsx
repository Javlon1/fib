import * as React from 'react'
import Loader from '../../../Ui/Loader/Loader'
import './Products.scss'


export default function Products({ projects, loading }) {


    if (loading) {
        return <Loader />
    }
 
    return (
        <section className='products'>
            {
                projects?.map((e,i) => (
                    <div className='products__item' key={i}>
                        <img className='products__item__img' src={e.img} alt="" />
                        <div className='products__item__list'>
                            <b className='products__item__list__title'>
                                {e.title}
                            </b>
                            <p className='products__item__list__text'>
                                {e.text}{e.id}
                            </p>
                            <span className='products__item__list__item'>
                                <p>от {e.price} $</p>
                                <button>В корзину</button>
                            </span>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
