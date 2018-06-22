import React, { Component } from "react";
import './newpostheader.scss'



class NewPostHeader extends Component {

      render(){

        return(
          <div className="newpostheader">
                <a href="">
                      <img src="https://i1.rgstatic.net/ii/profile.image/274606363770880-1442482667796_Q512/Carlos_Paiva3.jpg" />
                      <span className="name">Carlos Paiva</span>
                </a>
                <p>
                  <a className="date" href="">44 mins</a>
                  <a href="">
                      <i className="fa fa-globe"></i>
                  </a>
                  <div className="rightsideofpost">
                    <a className="follow" href="">
                      <i className="fa fa-star"></i>
                    </a>
                    <a className="personpostmenu" href="">
                      <i className="fa fa-caret-down"></i>
                    </a>
                  </div>
               </p>
         </div>

        )
      }
}


export default NewPostHeader;
