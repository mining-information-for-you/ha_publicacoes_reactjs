

const initialState = {
  newValue: ''
};


export function error(state = false, action){
  switch (action.type) {
    case 'ERROR':
         return action.payload.error
    break;
    default:
       return state

  }
}

export function loading(state = false, action){
  switch (action.type) {
    case 'IS_LOADING':
         return action.payload.loading
    break;

    default:
       return state

  }
}

export function success(state = [], action){
  switch (action.type) {
    case 'SUCCESS':
         return action.payload.data
    break;

    default:
       return state

  }
}

export default (state = initialState , action) => {

  switch (action.type) {
  case 'ON_HANDLECHANGE':

       const valuee = action.payload.value
       //console.log("entrou reducer");
       //console.log(valuee);
       return Object.assign({}, state, valuee)

   break;

   default:
     return state;
 }

}
