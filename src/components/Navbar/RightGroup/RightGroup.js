import React, { Component } from "react";
import './rightgroup.scss'




class RightGroup extends Component {

      render(){

        return(
          <div class="right-group">
          <div className="link-group">
              <a href="">
                <img src="//i.imgur.com/5jInimY.jpg"/>Michael
              </a>
          </div>

          <div className="link-group">
            <a href="">Home</a>
          </div>

          <div className="notification-group">
            <div className="link-group">
              <a className="freqnotif" href="">
                  <i className="fa fa-group"></i>
              </a>
            </div>
          <div className="link-group">
              <a className="msgnotif" href="">
              <i className="fa fa-comment"></i>
              </a>
          </div>
          </div>
          </div>


        )
      }
}


export default RightGroup;
