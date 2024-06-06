import React, { useState } from 'react';
import './stylesheets/Home.css';

// Images
import CoverImg from '/src/assets/Images/cover-img.png';
import Equinix from '/src/assets/Images/equinix.png';
import Prologis from '/src/assets/Images/prologis.png';
import Realty from '/src/assets/Images/realty.png';
import Tower from '/src/assets/Images/tower.png';
import valueImg from '/src/assets/Images/value.png';
import contactImg from '/src/assets/Images/contact.jpg'

// Icons
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

// Libraries
import CountUp from 'react-countup';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { 
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";

// Utilities
import data from '../../utils/server.js';
import { sliderSettings } from '../../utils/settings.js';
import Adata from '../../utils/accordion.jsx'
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
                <Swiper  {...sliderSettings} breakpoints={sliderSettings.breakpoints}> 

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

        {/* Values*/}
        <section className="v-wrapper">
            <div className="paddings inner-width flex-center v-container">
                <section className="v-left">
                    <div className="img-container">
                        <img src={valueImg} alt="" />
                    </div>
                </section>

                <section className="flex-col-start v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We are always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>

                    {/* Accordion */}
                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={0}
                        preExpanded={[0]}
                        >
                        {Adata.map((item, i) => {
                            const [className, setClassName] = useState("collapsed");
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flex-center accordionBtn'>
                                            <AccordionItemState>
                                                {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flex-center icon">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flex-center icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>    
                            )
                        }
                        )}
                    </Accordion>
                </section>
            </div>
        </section>
        
        {/* Contact */}
        <section className="c-wrapper">
            <div className="paddings inner-width flex-center c-container">
                {/* left side */}
                <section className="flex-col-start c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'>We are always ready to help by providing the best service.We believe a good place to <br /> live can  make your life better.</span>

                    <div className="flex-col-start contactModes">
                        {/* firstrow */}
                        <section className="flex-start row">
                            <div className="flex-col-center mode">
                                <div className="flex-start">
                                    <div className="flex-center icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flex-col-start detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>080-111-222-33</span>
                                    </div>
                                </div>
                                <div className="flex-center button">Call Now</div>
                            </div>

                            {/* second mode */}
                            <div className="flex-col-center mode">
                                <div className="flex-start">
                                    <div className="flex-center icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flex-col-start detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>080-111-222-33</span>
                                    </div>
                                </div>
                                <div className="flex-center button">Chat Now</div>
                            </div>
                        </section>

                        {/* second row */}
                        <section className="flex-start row">
                            <div className="flex-col-center mode">
                                <div className="flex-start">
                                    <div className="flex-center icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flex-col-start detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>080-111-222-33</span>
                                    </div>
                                </div>
                                <div className="flex-center button">Video Call Now</div>
                            </div>

                            {/* second mode */}
                            <div className="flex-col-center mode">
                                <div className="flex-start">
                                    <div className="flex-center icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flex-col-start detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>080-111-222-33</span>
                                    </div>
                                </div>
                                <div className="flex-center button">Message Now</div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="c-right">
                    <div className="img-container">
                        <img src={contactImg} alt="" />
                    </div>
                </section>
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
            <button onClick={() => swiper.slidePrev()}>{"<"}</button>
            <button onClick={() => swiper.slideNext()}>{">"}</button>
        </div>
    )
}
