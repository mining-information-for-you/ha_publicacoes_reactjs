import React, { Component } from "react";
import './search.scss'
import FaSearch from 'react-icons/lib/md/search'


class Search extends Component {

      render(){

        return(
          <div className="search-box">
            <div className="input-group">
                <input aria-describedby="basic-addon2" className="form-control" placeholder="Busca" type="text" />
                <button className="input-group-addon pointer" id="basic-addon2">
                    <i className="fa fa-search"><FaSearch size={"20"}/></i>
                </button>
             </div>
          </div>
        )
      }
}


export default Search;
