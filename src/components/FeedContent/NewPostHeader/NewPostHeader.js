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
                  <a className="date" href="">{this.props.ano}</a>
                  Revista: {this.props.revista}


                  </p>
               </div>
         </div>

        )
      }
}


export default NewPostHeader;
