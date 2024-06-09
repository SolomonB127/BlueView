import React, { useState } from 'react'
import './stylesheets/Header.css'
import Logo from '/src/assets/Images/BlueView-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const getMenuStyles = (menuOpen) =>{
        if (document.documentElement.clientWidth <= 800)
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

                    <ul className="flex-center h-menu" style = {getMenuStyles(menuOpen)}>
                        <li>
                            <NavLink to='/residencies'>Residencies</NavLink>
                        </li>
                        <li>
                            <NavLink to='/values'>Our Values</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user'>Get Started</NavLink>
                        </li>
                        <button className='button'>
                            <li>
                                <NavLink to=''>Contact</NavLink>
                            </li>
                        </button>
                    </ul>
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