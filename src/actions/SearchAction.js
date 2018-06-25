import { URL_API } from "./../services/base";


const IS_LOADING = 'IS_LOADING'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'



function isLoading(loading){
  return {
    type: IS_LOADING,
    payload: {
      loading: loading
    }
  }
}

function success(data){
  return {
    type: SUCCESS,
    payload: {
      data
    }
  }
}

function error(error){
  return {
    type: ERROR,
    payload: {
      error
    }
  }
}


export function thunkSearchAction(resultado){

    //console.log('action');
    //console.log(resultado);
    //console.log(resultado.pesquisa.api);
    return (dispatch) => {
      dispatch(isLoading(true))
       fetch(`${URL_API}${resultado.pesquisa.api}`, {
            method: 'POST',
            body: JSON.stringify(resultado.pesquisa.buscar),
            headers:{
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
            },
            })
         .then((response) => {
           //console.log(response);
           if (!response.ok ){
             throw Error(response.statusText)
           }

           dispatch(isLoading(false))
           return response

         })
         .then((response) => response.json() )
         .then((itens) => dispatch(success(itens)))
         .catch((err) => dispatch(error(err)))



    }
}

const onCampoPesquisa = (value) => {
  return {
    type:  'ON_CAMPOPESQUISA',
    payload: {
      value
    }
  }
}

export default {
  onCampoPesquisa,
}
