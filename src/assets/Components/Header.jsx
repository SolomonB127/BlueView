import React, { useState } from 'react'
import './stylesheets/Header.css'
import Logo from '/src/assets/Images/BlueView-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const getMenuStyles = (menuOpen) =>{
        if (document.documentElement.clientWidth <= 1280)
        {
            return { right: !menuOpen && "-100%"};
        }
    }
    return (
        // Nav section
        <nav>
            <section className='h-wrapper'>
                <div className="flex-center paddings inner-width h-container">
                    <Link to='/' className='img-link'>
                        <img src={Logo} alt="Logo" width={100}/>
                    </Link>
                    <OutsideClickHandler onOutsideClick={()=>[
                        setMenuOpen(false)
                    ]}>
                        <ul className="flex-center h-menu" style = {getMenuStyles(menuOpen)}>
                            <li>
                                <a href='#residencies'>Residencies</a>
                            </li>
                            <li>
                                <a href='#values'>Our Values</a>
                            </li>
                            <li>
                                <a href='#contact'>Contact Us</a>
                            </li>
                            <li>
                                <a href='#user'>Get Started</a>
                            </li>
                            <button className='button'>
                                <li>
                                    <a href='#contact'>Contact</a>
                                </li>
                            </button>
                        </ul>
                    </OutsideClickHandler>
{/* Mobile Responsiveness */}
                <section>
                    <div className="menu-icon" onClick={() => setMenuOpen ((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div>
                </section>
                </div>
            </section>
        </nav>
    )
}

export default Header