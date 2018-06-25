import React, { Component } from "react";
import './search.scss'
import FaSearch from 'react-icons/lib/md/search'
import { connect } from 'react-redux'
import SearchAction from './../../../actions/SearchAction'

import { thunkSearchAction } from './../../../actions/SearchAction'


class Search extends Component {

      constructor(props){
        super(props)

        this.state = {
          filtro: "Filtro",
          api: ""
        }

        this.pesquisar = this.pesquisar.bind(this)
        this.campoPesquisa = this.campoPesquisa.bind(this)
      }

      campoPesquisa = event => {
        this.props.onCampoPesquisa({ authorname: event.target.value })
      }

      pesquisar = event => {
        event.preventDefault();
        const { resultado } = this.props

        //console.log(this.state);
        if (this.state.api == 'Autor')
            var pesquisa = {
                api : this.state.api,
                buscar: { authorname: resultado.result['authorname'] }
              }

        if (this.state.api == 'AnoHaPublicoes')
            var pesquisa = {
                api : this.state.api,
                buscar: { ano: resultado.result['authorname'] }
            }

        if (this.state.api == 'Producao')
                var pesquisa = {
                    api : this.state.api,
                    buscar: { producao: resultado.result['authorname'] }
                }


        var postData = {
            pesquisa
        }

        if (!this.state.api == "")
            this.props.onPesquisar(postData);
      }

      setAutor = event => {
        event.preventDefault();
        this.setState({ filtro: 'Autor'});
        this.setState({ api: 'Autor'});

      }

      setAno = event => {
        event.preventDefault();
        this.setState({ filtro: 'Ano'});
        this.setState({ api: 'AnoHaPublicoes'});
      }

      setProducao = event => {
        event.preventDefault();
        this.setState({ filtro: 'Produção'});
        this.setState({ api: 'Producao'});
      }

      render(){
        //console.log(this.state);
        return(


          <div className="search-box">
            <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.filtro}</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={this.setAutor} href=''>Autor</a>
              <a className="dropdown-item" onClick={this.setAno} href=''>Ano</a>
              <a className="dropdown-item" onClick={this.setProducao} href=''>Produção</a>
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
