import React from 'react';
import './stylesheets/Footer.css';
import Logo from '/src/assets/Images/BlueView-logo.png'
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings inner-width flex-center f-container">
                {/* left side */}
                <section className="flex-col-start f-left">
                    <img src={Logo} alt="" width={120}/>
                    <span className="secondaryText">
                    Our vision is to make everywhere feel like home, for everyone.
                    </span>
                </section>
            </div>
        </section>
    )
}

export default Footer