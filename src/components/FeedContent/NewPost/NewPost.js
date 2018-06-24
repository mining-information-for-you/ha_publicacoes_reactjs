import React, { Component } from "react";
import './newpost.scss'



class NewPost extends Component {

      render(){

        return(
          <div className="newpost">
            <div className="postcontent">
              {this.props.producao}
            </div>
          </div>

        )
      }
}


export default NewPost;
