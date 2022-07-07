import React, { Component } from 'react';
import './navbar.scss';

class TopNavbar extends Component {
  toggle(e){
    var topnav = document.getElementById('myTopnav');
    if (topnav.className === 'topnav') {
      topnav.className += ' responsive';
    } else {
      topnav.className = 'topnav';
    }
  }

  componentDidMount() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
    }
  }

  render() {
    return (
      <div id="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default TopNavbar;
