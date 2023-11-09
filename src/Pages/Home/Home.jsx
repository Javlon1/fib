import * as React from 'react'
import Intro from '../../Components/Page/Home/Intro/Intro'
import News from '../../Components/Page/Home/News/News'
import './Home.scss'

const Home = () => {
    return (
        <section className='home'>
            <Intro />
            <News />
        </section>
    )
}

export default Home;