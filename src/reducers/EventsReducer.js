import {
    FETCH_EVENTS_STARTED,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILED
} from '../actions/types';

const INIT_STATE = {
    pageLoading: true,
    pageError: false,
    data: []
};


export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_EVENTS_STARTED:
            return { ...state, pageLoading: true, pageError: false };
        case FETCH_EVENTS_SUCCESS:
            return { ...state, pageLoading: false, pageError: false, data: action.data }
        case FETCH_EVENTS_FAILED:
            return { ...state, pageLoading: false, pageError: true }
        default:
            return state;
    }
};