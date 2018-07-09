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
                
                <span className="name">{this.props.mh}</span>
          </a>
          <div>
            <p>
            <br></br>
            <a className="date" href="">{this.props.da}</a>
            <br></br>
            {this.props.ms}
            


            </p>
         </div>
   </div>

        )
      }
}


export default NewPostHeader;
