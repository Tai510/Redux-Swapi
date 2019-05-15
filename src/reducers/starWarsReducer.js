import {FETCH_CHAR_START,FETCH_CHAR_SUCCESS,FETCH_CHAR_FAILURE} from /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case  FETCH_CHAR_START:
    console.log('hi')
    return {
      ...state,
      isFetching: true,
      error: ''
    };
    case FETCH_CHAR_SUCCESS:
    console.log('dfdf')
    return {
      // ...state,
      // isFetching: false,
      // error: '',
      // charDisplay: action.payload
      ...state, characters: [...action.payload], fetching: false 
    };
    case FETCH_CHAR_FAILURE:
    console.log('dfd')
      return {
        ...state,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};


export default charsReducer;