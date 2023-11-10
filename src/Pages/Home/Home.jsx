import * as React from 'react'
import Intro from '../../Components/Page/Home/Intro/Intro'
import News from '../../Components/Page/Home/News/News'
import Item from '../../Components/Page/Home/Products/Item/Item'
import './Home.scss'

const Home = () => {
    return (
        <section className='home'>
            <Intro />
            <News />
            <Item />
        </section>
    )
}

export default Home;