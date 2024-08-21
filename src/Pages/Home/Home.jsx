import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Info from '../../Components/Why-info/Info'
import Service from '../../Components/Service-section/Service'
import Product from '../../Components/Products/Product'
import News from '../../Components/News/News'
// import Welcome from '../../Components/Welcome/Welcome'
// import Slider from '../../Components/Slider/Slider'
import ContactPage from '../Contact-page/ContactPage'
// import AboutPage from '../About-page/AboutPage'
// import SeparateProduct from '../Separate-product/Product01/SeparateProduct'
// import Gallary from '../../Components/Gallary/Gallary'
import CounterSection from '../../Components/Counter/CounterSection'
import NewsSlider from '../../Components/NewsSlider/NewsSlider'
// import Proslader from '../../Components/Proslader/Proslader'


const Home = () => {
  return (
    <div>
        <Hero/>
        {/* <Welcome/> */}
        {/* {<Proslader/>} */}
        {<NewsSlider/>}
        {/* <News/> */}
        <Product/>
        <CounterSection/>
        <Info/>
        <About/>
        {/* <Slider/> */}
        <Service/>
        <ContactPage />
        {/* <AboutPage /> */}
        {/* <SeparateProduct /> */}
        {/* <Gallary/> */}
    </div>
  )
}

export default Home