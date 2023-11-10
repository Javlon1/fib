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
