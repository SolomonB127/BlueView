import React from 'react';
import './stylesheets/Home.css'
import CoverImg from '/src/assets/Images/cover-img.png'
import Equinix from '/src/assets/Images/equinix.png';
import Prologis from '/src/assets/Images/prologis.png';
import Realty from '/src/assets/Images/realty.png';
import Tower from '/src/assets/Images/tower.png';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'
import data from '../../utils/server.js'
import { sliderSettings } from '../../utils/settings.js';
const Home = () => {
    return (
    <main>
        {/* Cover Image */}
        <section className="cover-wrapper">
            <div className="paddings inner-width flex-center" id='cover-img-container'>

                <div className="flex-col-start cover-left">
                    <section className='cover-title'>
                        <section className="glow" />
                        <h1>Discover <br /> More Suitable <br /> Property</h1>
                    </section>

                    <section className="flex-col-start cover-desc">
                        <span className='secondaryText'>
                            find a variety of properties that suits you very easily.
                        </span>
                        <span className='secondaryText'>
                            forget all difficulties in finding a residence for you.
                        </span>
                    </section>

                    {/* search-bar */}
                    <section className="flex-center search-bar">
                        <HiLocationMarker color='#4066ff' size={25} />
                        <input type="text" name="" id="" />
                        <button className='button'>Search</button>
                    </section>

                    {/* Stats */}
                    <section className="flex-center" id='stats'>
                        <div className="flex-col-center stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>

                        <div className="flex-col-center stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>

                        <div className="flex-col-center stat">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                        </div>
                    </section>
                </div>

                <div className="flex-center cover-right">
                    <section className="img-container">
                        <img src={CoverImg} alt="" />
                    </section>
                </div>
            </div>
        </section>

        {/* Companies */}
        <section className='c-wrapper'>
            <div className="paddings inner-width flex-center" id='c-container'>
                <img src={Prologis} alt="" />
                <img src={Tower} alt="" />
                <img src={Equinix} alt="" />
                <img src={Realty} alt="" />
            </div>
        </section>

        {/* Residencies */}
        <section className="r-wrapper">
            <div className="paddings inner-width r-container">
                <section className="r-head flex-col-start">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residences</span>
                </section>

                {/*Using the Slider component, 
                mapping through the data in server.js file & 
                Destructuring sliderSetting */}
                <Swiper  {...sliderSettings} breakpoints={sliderSettings.breakPoints}> 
                {/* Slider buttons */}
                <SliderBtn />

                    {
                        data.map((card,i)=>{
                            return(
                                <SwiperSlide key={i}>
                                <div className="flex-col-start r-card">
                                    <img src={card.image} alt="home" />
                                    <span className="seconadryText r-price">
                                        <span style={{color: "orange"}}>$</span><span>{card.price}</span>
                                    </span>

                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    </main>
    )
}

export default Home

// Slider buttons logic
const SliderBtn = () => {
    const swiper = useSwiper();
    return(
        <div className="flex-center r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}