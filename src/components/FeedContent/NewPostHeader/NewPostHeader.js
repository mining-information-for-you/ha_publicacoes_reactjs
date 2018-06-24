import React, { Component } from "react";
import './newpostheader.scss'



class NewPostHeader extends Component {
      constructor(){
        super();

      }

      render(){

        return(
          <div className="newpostheader">
                <a href="">
                      <img src="https://www.scpservice.ch/images/avatar.png" />
                      <span className="name">{this.props.autor}</span>
                </a>
                <div>
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
         </div>

        )
      }
}


export default NewPostHeader;
