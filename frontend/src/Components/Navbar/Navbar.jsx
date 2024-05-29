import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import icon4 from '../Assets/icon4.png';
import cart3 from '../Assets/cart3.png';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import menubar from '../Assets/menu2.png';

function Navbar() {
  const [menu, setMenu] = useState("Shop");
  const { cartCount } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <section id="target-section-item">
      <nav>
        <div className='navbar'>
          <img className='nav-dropdown' onClick={dropdown_toggle} src={menubar} alt="menu" />

          <div className='logo-and-name'>
            <NavLink to={'/'} onClick={() => setMenu("Shop")} style={{ textDecoration: 'none' }}>
              <div className='nav-logo'>
                <img src={icon4} alt='logo' className='icon' />
                <p className='icon-name'>StyleStreet</p>
              </div>
            </NavLink>
          </div>
          
          <ul ref={menuRef} className="nav-menu">
            <NavLink to={'/'} style={{ textDecoration: 'none', color: 'white' }}><li onClick={() => setMenu("Shop")}>Home{menu === "Shop" ? <hr /> : null}</li></NavLink>
            <NavLink to={'/womens'} style={{ textDecoration: 'none', color: 'white' }}><li onClick={() => setMenu("Women")}>Women{menu === "Women" ? <hr /> : null}</li></NavLink>
            <NavLink to={'/mens'} style={{ textDecoration: 'none', color: 'white' }}><li onClick={() => setMenu("Men")}>Men{menu === "Men" ? <hr /> : null}</li></NavLink>
            <NavLink to={'/kids'} style={{ textDecoration: 'none', color: 'white' }}><li onClick={() => setMenu("Kids")}>Kids{menu === "Kids" ? <hr /> : null}</li></NavLink>
          </ul>

          <div className="nav-login-cart">
            {localStorage.getItem('auth-token') ? (
              <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
            ) : (
              <NavLink to={'/login'}><button className='login-button'>Login/Sign-up</button></NavLink>
            )}
            <div className='cart-and-count'>
              <NavLink to={'/cart'} style={{ textDecoration: 'none' }}>
                <img src={cart3} alt='cart' className='cart-logo' />
                <div className="nav-cart-count">{cartCount()}</div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
