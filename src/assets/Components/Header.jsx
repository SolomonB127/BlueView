import React from 'react'
import './stylesheets/Header.css'
import Logo from '/src/assets/Images/BlueView-logo.png'
const Header = () => {
    return (
        // Nav section
        <nav>
            <section className='h-wrapper'>
                <div className="flex-center paddings inner-width h-container">
                    <img src={Logo} alt="Logo" width={80}/>

                    <ul className="flex-center h-menu">
                        <li>
                            <a to='/residencies'>Residencies</a>
                        </li>
                        <li>
                            <a to='/values'>Our Values</a>
                        </li>
                        <li>
                            <a to='/contact'>Contact Us</a>
                        </li>
                        <li>
                            <a to='/user'>Get Started</a>
                        </li>
                        <button className='button'>
                            <li>
                                <a to=''>Contact</a>
                            </li>
                        </button>
                    </ul>
                </div>
            </section>
        </nav>
    )
}

export default Header