import * as React from 'react'
import { Context } from '../../../../Context/Context'
import Loader from '../../../Ui/Loader/Loader'
import './Products.scss'


export default function Products({ projects, loading }) {
    const { setOpenModel } = React.useContext(Context)

    if (loading) {
        return <Loader />
    }
    
    const scrollNone = () => {
        document.body.style.overflow = "hidden"
    }

    return (
        <section className='products'>
            {
                projects?.map((e, i) => (
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
                                <button onClick={() => {
                                    setOpenModel(true)
                                    scrollNone()
                                }}>
                                    В корзину
                                </button>
                            </span>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
