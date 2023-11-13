import * as React from 'react'
import ReactPaginate from 'react-paginate'
import { ProductData } from '../../../../../Data/Data'
import Products from '../Products'
import './Item.scss'
// import { Context } from '../../../../../Context/Context'


export default function Item() {

    // const { lan } = React.useContext(Context)
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

    return (
        <section className='item'>
            <div className='container'>
                <h2 className='container__title'>
                    Паста
                </h2>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className='title'>
                                    <h4>Modal title</h4>
                                    <b>hfuehuf hefueh eijfie efuuhfeu</b>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                                <button className="btn-close btnM" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="product">
                                    <div className="product__img">
                                        <img src="" alt="" />
                                        ss
                                    </div>
                                    <div className="product__item">
                                        hh
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className='btn'>добавить в карзину</button>
                            </div>
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
