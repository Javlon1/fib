import * as React from 'react'
import ReactPaginate from 'react-paginate'
import { Context } from '../../../../../Context/Context'
import { ProductData } from '../../../../../Data/Data'
import Products from '../Products'
import './Item.scss'
import pizza from "../../../../../Assets/Img/pizza1.png"

export default function Item() {
    const { openModel, setOpenModel } = React.useContext(Context)
    const [projects, setProjects] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [countriesPerPage] = React.useState(8)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const getCounteries = async () => {
            await fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users')
                .then(resp => {
                    if (!resp.ok) throw new Error(`oшибка: ${resp.status}`)
                    return resp.json()
                })
                .then(data => setProjects(ProductData))
                .catch(error => console.error(error.message))
            setLoading(false)
        }
        getCounteries()
    }, [])

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = projects.slice(firstCountryIndex, lastCountryIndex)

    const handlerPageClick = (item) => {

        const correntPage = (item.selected) + 1
        setCurrentPage(correntPage)

    }

    const totalProjects = projects.length

    const scrollAct = () => {
        document.body.style.overflow = "scroll"
    }

    return (
        <section className='item'>
            <div className='container'>
                <h2 className='container__title'>
                    Паста
                </h2>

                <div className={openModel ? "myModel modalAtc" : "myModel"}>
                    <div className='myModel__content'>
                        <div className="myModel__content__left">
                            <img style={{ width: 200, height: 200 }} src={pizza} alt={pizza} />
                            <button onClick={() => {
                                setOpenModel(false)
                                scrollAct()
                            }}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className="myModel__content__right">
                            <div className='myModel__content__right__title'>
                                <span>
                                    <h4>С креветками и трюфелями</h4>
                                    <h6>25 см, традиционное тесто, 360 г</h6>
                                    <p>Моцарелла, соус альфредо</p>
                                </span>
                                <button onClick={() => {
                                    setOpenModel(false)
                                    scrollAct()
                                }}>
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <ul className='myModel__content__right__size'>
                                <li>
                                    <p>Маленькая</p>
                                </li>
                                <li>
                                    <p>Маленькая</p>
                                </li>
                                <li>
                                    <p>Маленькая</p>
                                </li>
                            </ul>
                            <ul className='myModel__content__right__sizeq'>
                                <li>
                                    <p>Традиционное</p>
                                </li>
                                <li>
                                    <p>Традиционное</p>
                                </li>
                            </ul>
                            <ul className='myModel__content__right__im'>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                                <li>
                                    <img src={pizza} alt="" />
                                    <p>Острый халапенью</p>
                                    <b>от 150 $</b>
                                </li>
                            </ul>
                            <button className='myModel__content__right__btn'>Добавить в корзину 1 048 $</button>
                        </div>
                    </div>
                </div>

                <Products projects={currentCountry} loading={loading} />

                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={totalProjects / countriesPerPage}
                    marginPagesDisplayed={2}
                    onPageChange={handlerPageClick}
                    containerClassName={'justify-content-center pagination'}
                    pageClassName={'page-item el'}
                    pageLinkClassName={'page-link el'}
                    previousClassName={'page-item el'}
                    previousLinkClassName={'page-link el'}
                    nextClassName={'page-item el'}
                    nextLinkClassName={'page-link el'}
                    breakClassName={'page-item el'}
                    breakLinkClassName={'page-link el'}
                    activeLinkClassName='act'
                />
            </div>
        </section>
    )
}