// we'll need axios
import axios from 'axios';
export const FETCH_CHAR_START = 'FETCH_CHAR_START'; 
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAILURE = 'ETCH_CHAR_FAILURE';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const getChar = () => dispatch => {
    dispatch({ type: FETCH_CHAR_START });
    axios
    .get('https://swapi.co/api/people')
    .then(res => {
        dispatch({ type: FETCH_CHAR_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({
            type: FETCH_CHAR_FAILURE,
            payload: '${err.response.status} ${err.response.statusText}'
        });
    });
}

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
