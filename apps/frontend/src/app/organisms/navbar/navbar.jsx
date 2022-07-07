import React, { Component } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  toggle(e){
    var topnav = document.getElementById('myTopnav');
    if (topnav.className === 'topnav') {
      topnav.className += ' responsive';
    } else {
      topnav.className = 'topnav';
    }
  }

  render() {
    return (
      <nav>
        <div className="topnav" id="myTopnav">
          <div className="topnav-logo">
            logo
          </div>

          <NavLink
            exact={true}
            to="/"
            activeclassname="active"
            onClick={e => this.toggle(e)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            activeclassname="active"
            onClick={e => this.toggle(e)}
          >
            Contact
          </NavLink>


        </div>
      </nav>
    );
  }
}

export default NavBar;
