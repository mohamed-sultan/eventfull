import {
    FETCH_CATEGORIES_STARTED,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILED,
    CLEAN_UP_CATEGORIES,
    REFRESH_CATEGORIES,
    PAGINATE_CATEGORIES_DATA,
} from '../actions/types';

const INIT_STATE = {
    data : [],
    pageLoading: true,
    pageError: false,
    pageRefreshing: false,
    index: 1,
    loadingMore: false,
    thereAreMoreData: true,
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_STARTED:
            return { ...state, pageLoading: true, pageError: false,  data: [], index: 1, loadingMore: false, thereAreMoreData: true}
        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, pageLoading: false, data: state.pageRefreshing ? action.data : [...state.data ,...action.data], pageRefreshing: false, loadingMore: false, thereAreMoreData: action.moreData }
        case FETCH_CATEGORIES_FAILED:
            return { ...state, pageLoading: false, pageError: true, pageRefreshing: false, loadingMore: false }
        case REFRESH_CATEGORIES:
            return { ...state, pageError: false, pageRefreshing: true, index: 1 }
        case PAGINATE_CATEGORIES_DATA:
            return {...state, index: action.index, loadingMore: true}
        case CLEAN_UP_CATEGORIES:
            return INIT_STATE
        default:
            return state;
    }
};