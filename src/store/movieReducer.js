import { movieList } from "../api/api"
import { SET_MOVIE_LIST, SET_IS_FETCHING } from "./consts"

const initialState = {
    data: {
        limit: 20,
        page_number: 1,
        movies: [],
        movie_count: null,


    },
    isFetching: false
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_LIST: {
            return {
                ...state, ...action.data
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

const setMovies = (data) => ({ type: SET_MOVIE_LIST, data })

const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export const getMovies = (limit, page) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await movieList.getMovie(limit, page)
    dispatch(setMovies(response.data))
    dispatch(setIsFetching(false))
}

export default movieReducer;