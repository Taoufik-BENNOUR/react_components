import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
        <p className="brand">Taoufik</p>
        <nav>
        <ul className="navigation-list">
          <a href="#"><li>HOME</li></a>
          <a href="#Services"><li>ABOUT</li></a>
          <a href="#Services"><li className="dropdown-btn">SERVICE;
            <ul className="dropdown">
              <li>more</li>
              <li>more</li>
              <li>more</li>
            </ul>
          </li></a>
          <a href="#video"><li>VIDEO</li></a>
          <a href="#contact"><li>CONTACT</li></a>
        </ul>
      </nav>
      </header>
        </div>
    )
}

export default Header
