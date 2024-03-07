import React from 'react';

import {Navlink} from "react-router-dom";
import './header.css'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { container, Row} from "reactstrap";

const nav__links = [
  {
    path:'home',
    display: 'Home'
  },
  {
    path:'shop',
    display: 'Shop'
  },
  {
    path:'cart',
    display: 'Cart '
  },
]

const Header = () => {
  return <header className="header">
    <container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src= {logo} alt="logo" />
            <div>
              <h1>mart</h1>
              <p>since 1994</p>
            </div>
          </div>

          <div className="navigation">
            <ul className="menu">
              {
                nav__links.map((item, index) =>(
                  <li className='nav__item' key = {index}>
                      <Navlink to={item.path} className= {(navClass)=> 
                        navClass.isActive ? 'nav__active' : '' } >{item.display}</Navlink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav__icons">

            <span className='fav__icon'>
            <i class="ri-heart-line"></i>
            </span>
            <span className='cart__icon'>
            <i class="ri-shopping-bag-line"></i>
            </span>

            <span><img src={userIcon} alt="" /></span>
          </div>

        <div className="mobile__menu">
          <span><i class="ri-menu-line"></i></span>
        </div>

        </div>
      </Row>
    </container>
  </header>
}

export default Header
