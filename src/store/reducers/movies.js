const INITIAL_STATE = {
  data: []
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'GET_MOVIES_REQUEST':
      return state;
      
    case 'GET_MOVIES_SUCCESS': 
      console.log('GET_MOVIES_SUCCESS', action.payload);
      return {...state, data: action.payload.results}
    default:
      return state;
  }
};