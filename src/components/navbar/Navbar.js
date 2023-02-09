import React from "react";
import {Link} from "react-scroll";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import "./navbar.css";
export const Navbar = () => {

  return(
    <div>
      <nav className='navbar'>
        <img src={logo} alt="Profile Imgae Logo" className='logo' />
        <div className='desktopMenu'>
          <Link className='desktopMenuListItem'> Home </Link>
        <Link className='desktopMenuListItem'> Clients </Link>
      <Link className='desktopMenuListItem'> About </Link>
    <Link className='desktopMenuListItem'> Portfolio </Link>
        </div>

        <button className='desktopMenuBtn'>
          <img src={contact} alt='' className='desktopMenuImg'/>
          Contact Me
        </button>
      </nav>
    </div>
  )

}
