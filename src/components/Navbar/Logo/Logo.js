import React, { Component } from "react";
import './logo.scss'



class Logo extends Component {

      render(){
        const logo = require('./../../../image/logo_ha.png');
        return(

          <a className="logo" href="   ">
              <img alt="" src={String(logo)} style={{width: 40, height: 40}}  />
          </a>

        )
      }
}


export default Logo;
