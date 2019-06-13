import {
    FETCH_SERVICES_STARTED,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILED,
    CLEAN_UP_SERVICES,
    REFRESH_SERVICES,
    PAGINATE_SERVICES_DATA,
    CHANGE_SELECTED_SERVICES
} from '../actions/types';

const INIT_STATE = {
    data : [],
    pageLoading: true,
    pageError: false,
    pageRefreshing: false,
    index: 1,
    loadingMore: false,
    thereAreMoreData: true,
    selected: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_SERVICES_STARTED:
            return { ...state, pageLoading: true, pageError: false,  data: [], index: 1, loadingMore: false, thereAreMoreData: true}
        case FETCH_SERVICES_SUCCESS:
            return { ...state, pageLoading: false, data: state.pageRefreshing ? action.data : [...state.data ,...action.data], pageRefreshing: false, loadingMore: false, thereAreMoreData: action.moreData }
        case FETCH_SERVICES_FAILED:
            return { ...state, pageLoading: false, pageError: true, pageRefreshing: false, loadingMore: false }
        case REFRESH_SERVICES:
            return { ...state, pageError: false, pageRefreshing: true, index: 1 }
        case PAGINATE_SERVICES_DATA:
            return {...state, index: action.index, loadingMore: true}
        case CHANGE_SELECTED_SERVICES:
            return {...state, selected: action.selected}
        case CLEAN_UP_SERVICES:
            return INIT_STATE
        default:
            return state;
    }
};