import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from '../../assets/logo shreeinsul.png';
import { NavItems } from './NavItems';
import { FactoryContext } from '../../Context/Context';

const Navbar = () => {
  const { menu, setMenu } = useContext(FactoryContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (item) => {
    setMenu(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 640) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'glassy' : ''}`}>
      <Link to='/' className='logo'><img src={logo} alt="Logo" /></Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        {NavItems &&
          NavItems.map((item, index) => (
            <li key={index}>
              {item.target ? (
                <a 
                  href={item.to} 
                  target={item.target} 
                  rel="noopener noreferrer" 
                  onClick={() => handleLinkClick(item.label)} 
                  className={menu === item.label ? "active" : ""}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  to={item.to} 
                  onClick={() => handleLinkClick(item.label)} 
                  className={menu === item.label ? "active" : ""}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))
        }
      </ul>
      <div className="navbar-right">
        <Link to='/contact' className='contact'>Contact us</Link>
      </div>
    </div>
  );
};

export default Navbar;
