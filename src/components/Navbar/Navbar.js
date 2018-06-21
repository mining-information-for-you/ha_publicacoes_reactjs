import React, { Component } from "react";
import './navbar.scss'
import Logo from "../Logo/Logo"
import Search from "./Search/Search"
import RightGroup from "./RightGroup/RightGroup"



class Navbar extends Component {

      render(){

        return(
          <div className="topbar">
            <Logo></Logo>
            <Search></Search>
            <RightGroup></RightGroup>


          </div>

        )
      }
}


export default Navbar;
