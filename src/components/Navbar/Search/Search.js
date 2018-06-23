import React, { Component } from "react";
import './search.scss'
import FaSearch from 'react-icons/lib/md/search'
import { connect } from 'react-redux'
import { thunkSearchAction } from './../../../actions/SearchAction'


class Search extends Component {

      constructor(props){
        super(props)

        this.pesquisar = this.pesquisar.bind(this)
      }

      pesquisar = event => {
        console.log('pesquisando');
      }


      render(){

        return(
          <div className="search-box">
            <div className="input-group">
                <input aria-describedby="basic-addon2" className="form-control" placeholder="Busca" type="text" />
                <button className="input-group-addon pointer" onClick={this.pesquisar} id="basic-addon2">
                    <i className="fa fa-search"><FaSearch size={"20"}/></i>
                </button>
             </div>
          </div>
        )
      }
}

const mapStateToProps = (state) => {
    return {
       resultado: state,

    }
}

const mapDispatchtoProps = (dispath) => {
    return {
        onHandleSubmit: (resultado) => dispath(thunkSearchAction(resultado))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search)
