import React, { Component } from "react";
import './search.scss'
import FaSearch from 'react-icons/lib/md/search'
import { connect } from 'react-redux'
import SearchAction from './../../../actions/SearchAction'

import { thunkSearchAction } from './../../../actions/SearchAction'


class Search extends Component {

      constructor(props){
        super(props)

        this.pesquisar = this.pesquisar.bind(this)
        this.campoPesquisa = this.campoPesquisa.bind(this)
      }

      campoPesquisa = event => {
        this.props.onCampoPesquisa({ authorname: event.target.value })
      }

      pesquisar = event => {
        event.preventDefault();
        const { resultado } = this.props

        const pesquisa = {
            authorname: resultado.result['authorname']
        }


        var postData = {
            pesquisa
        }

        this.props.onPesquisar(postData);
      }


      render(){

        return(


          <div className="search-box">
            <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filtro</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Autor</a>
              <a className="dropdown-item" href="#">Ano</a>
              <a className="dropdown-item" href="#">Produção</a>
            </div>
          </div>
          <input aria-describedby="basic-addon2" className="form-control" name="authorname" onChange={this.campoPesquisa} placeholder="Busca" type="text" />
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
        onCampoPesquisa: (resultado) => dispath(SearchAction.onCampoPesquisa(resultado)),
        onPesquisar: (resultado) => dispath(thunkSearchAction(resultado)),

    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search)
