const INITIAL_STATE = {
  data: [],
  selectedMovie: {},
  loading: false,
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){

    case 'GET_MOVIES_REQUEST':
      return {...state, loading: true};
      
    case 'GET_MOVIES_SUCCESS': 
      return {...state, loading: false, data: action.payload.results}
    
    case 'GET_MOVIES_FAILURE': 
      return {...state, loading: false,}

    case 'GET_MOVIE_DETAIL_REQUEST':
      return {...state, loading: true,}

    case 'GET_MOVIE_DETAIL_SUCCESS':
      return {...state, loading: false, selectedMovie: action.payload}
            
    default:
      return state;
  }
};