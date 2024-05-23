import React from 'react';
import './stylesheets/Home.css'
import CoverImg from '/src/assets/Images/cover-img.png'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
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
                        <span>
                            find a variety of properties that suits you very easily.
                        </span>
                        <span>
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
    </main>
    )
}

export default Home