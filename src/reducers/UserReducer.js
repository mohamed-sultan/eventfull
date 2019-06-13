import {
    SET_USER_OBJECT,
    LOG_OUT
} from '../actions/types';

const INIT_STATE = {
    userObj: null
};


export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case SET_USER_OBJECT:
            return { ...state, userObj: action.userObj }
        case LOG_OUT:
            return { ...state, userObj: null }
        default:
            return state;
    }
};