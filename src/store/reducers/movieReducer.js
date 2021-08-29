

import * as movieType from "../constants/movieType"


const initialState = {
    movie: [],
    error: '',
    page: 1,
    tongpage: 0,
    loading: false,
    moviedetail: {},
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case movieType.FETCH_MOVIE_PAGE_REQUEST:
            return { ...state, loading: true }
        case movieType.FETCH_MOVIE_PAGE_SUCCESS:
            return { ...state, movie: payload.items, page: payload.currentPage, tongpage: payload.totalPages, loading: false }
        case movieType.FETCH_MOVIE_PAGE_FAIL:
            return { ...state, error: payload, loading: false }
        case movieType.PAGE_NEXT:
            let pagenext = state.page;
            pagenext = pagenext + 1
            return { ...state, page: pagenext }
        case movieType.PAGE_PREV:
            let pageprev = state.page;
            pageprev = pageprev - 1
            return { ...state, page: pageprev }
        case movieType.FETCH_MOVIE_DETAIL_REQUEST:
            return { ...state, loading: true }
        case movieType.FETCH_MOVIE_DETAIL_SUCCESS:
            return { ...state, moviedetail: payload, loading: false }
        case movieType.FETCH_MOVIE_DETAIL_FAIL:
            console.log(payload)
            return { ...state, error: payload, loading: false }
        default:
            return state
    }
}

export default movieReducer;