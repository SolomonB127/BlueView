import React from 'react';
import './stylesheets/Footer.css';
import Logo from '/src/assets/Images/BlueView-logo.png'
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings inner-width flex-center f-container">
                <section className="flex-col-start f-left">
                    <img src={Logo} alt="" width={90}/>
                    <span className="secondaryText">
                    Our vision is to make everywhere feel like home, for everyone.
                    </span>
                </section>

                <section className="flex-col-start f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>Km 32 Lekki - Epe Expressway,
                        Awoyaya, Lagos, Nigeria.
                    </span>
                    <div className="flex-center f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Footer