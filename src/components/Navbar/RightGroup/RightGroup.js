import React, { Component } from "react";
import './rightgroup.scss'
import FaComment from 'react-icons/lib/fa/comment'
import FaGlobe from 'react-icons/lib/fa/globe'



class RightGroup extends Component {

      render(){

        return(
          <div class="right-group">
          <div className="link-group">
              <a href="">
                <img src="https://avatars1.githubusercontent.com/u/108081?s=400&v=4"/>Rodrigo
              </a>
          </div>

          <div className="link-group">
            <a href="">Inicio</a>
          </div>

          <div className="notification-group">

          <div className="link-group">
              <a className="msgnotif" href="">
              <i className="fa fa-comment"><FaComment size={"30"}/></i>
              </a>
          </div>
          <div className="link-group">
              <a className="msgnotif" href="">
              <i className="fa fa-comment"><FaGlobe size={"30"}/></i>
              </a>
          </div>
          </div>
          </div>


        )
      }
}


export default RightGroup;
