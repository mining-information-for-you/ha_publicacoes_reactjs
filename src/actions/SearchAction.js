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


    return (dispatch) => {
      dispatch(isLoading(true))
       fetch(`${URL_API}Autor`, {
            method: 'POST',
            body: JSON.stringify({"authorname":"Carlos Paiva"}),
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
