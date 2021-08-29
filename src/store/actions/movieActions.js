import movieApi from "../../apis/movieApi"
import * as movieType from "../constants/movieType";

export const fetchMoviePage = (page) => async (dispatch) => {
    try {
        dispatch({ type: movieType.FETCH_MOVIE_PAGE_REQUEST })
        const response = await movieApi.fetchAllMoviePage(page);
        dispatch({
            type: movieType.FETCH_MOVIE_PAGE_SUCCESS,
            payload: response.data.content
        })
    } catch (err) {
        dispatch({
            type: movieType.FETCH_MOVIE_PAGE_FAIL,
            payload: err,
        })
    }
}
export const fetchMovieDetailAction = (movieid) => async (dispatch) => {
    try {
        dispatch({ type: movieType.FETCH_MOVIE_DETAIL_REQUEST })
        const response = await movieApi.fetchMovieDetail(movieid)
        dispatch({
            type: movieType.FETCH_MOVIE_DETAIL_SUCCESS,
            payload: response.data.content
        })
    } catch (err) {
        dispatch({
            type: movieType.FETCH_MOVIE_DETAIL_FAIL,
            payload: err
        })
    }
}

export const changpage = (value) => (dispatch) => {
    if (value) {
        dispatch({
            type: movieType.PAGE_NEXT

        })
    } else {
        dispatch({
            type: movieType.PAGE_PREV
        })
    }

}