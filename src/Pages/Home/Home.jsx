import * as React from 'react'
import Info from '../../Components/Page/Home/Info/Info'
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
            <Info />
        </section>
    )
}

export default Home;