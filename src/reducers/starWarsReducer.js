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
    return {
      ...state,
      isFetching: true,
      error: ''
    };
    case FETCH_CHAR_SUCCESS:
    return {
      ...state,
      isFetching: false,
      error: '',
      charDisplay: action.payload
    };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        isFetching: false,
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