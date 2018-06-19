import React, { Component } from "react";
import './search.scss'



class Search extends Component {

      render(){
        const logo = require('./../../image/logo.png');
        return(
          <div className="search-box">
            <div className="input-group">
                <input aria-describedby="basic-addon2" className="form-control" placeholder="Search" type="text" />
                <button className="input-group-addon pointer" id="basic-addon2">
                    <i className="fa fa-search"></i>
                </button>
             </div>
          </div>
        )
      }
}


export default Search;
