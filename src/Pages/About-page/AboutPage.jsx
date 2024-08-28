import React from 'react'
import "./AboutPage.css"
import video from '../../assets/AboutPageimg/aboutpagevideo.mp4'
import CounterSection from '../../Components/Counter/CounterSection'
import image01 from '../../assets/AboutPageimg/image01.jpg'
import image02 from '../../assets/AboutPageimg/image02.jpg'
import image03 from '../../assets/AboutPageimg/image03.jpg'
import Parelax from '../../Components/ParelaxEffect/Parelax'
// import image03 from '../../assets/AboutPageimg/image03.jpg'


const AboutPage = () => {
    return (
        <>
            <Parelax heading={"About Shree Engineers"} backgroundImage={image03} />
            <div className='aboutpage'>
                <div className="about-page-main">
                    <div className="about-page-title">
                        <p>About us</p>
                        <h1>Welcome to Shree Engineers</h1>
                    </div>
                    <div className="about-page-img">
                        <video src={video} autoPlay muted loop></video>
                    </div>
                    <div className="about-page-desc">
                        <p>About Shree Engineers</p>
                        <h1>Shree Group of companies</h1>
                        <p className='about-page-desc-text'>SHREE ENGINEERS an ISO 9001:2008 Certified Organization pioneer in hot, cold, acoustic insulation and ducting work having experience of more than 18 years in almost all industrial segments. The company is managed by a team of qualified, energetic and dynamic Engineers who always are in search of better avenues.</p>
                    </div>
                    <div className="about-page-content">
                        <div className="about-page-content-one">
                            <div className="about-page-content-one-img">
                                <img src={image01} alt="" />
                            </div>
                            <div className="about-page-content-one-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-two">
                            <div className="about-page-content-one-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                            <div className="about-page-content-one-img">
                                <img src={image02} alt="" />
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-three">
                            <div className="about-page-content-one-img">
                                <img src={image03} alt="" />
                            </div>
                            <div className="about-page-content-one-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-two">
                            <div className="about-page-content-one-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                            <div className="about-page-content-one-img">
                                <img src={image02} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="about-page-countdown">
                        <CounterSection />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutPage