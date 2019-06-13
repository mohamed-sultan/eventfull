import {
    LOGIN_PROP_CHANGED,
    LOGIN_PROP_ERROR,
    LOGIN_SUBMIT_STARTED,
    LOGIN_SUBMIT_SUCCES,
    LOGIN_SUBMIT_FAILED,
} from '../actions/types';

const INIT_STATE = {
    email: '',
    password: '',
    loading: false,
    emailError: false,
    passwordError: false,
};


export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case LOGIN_PROP_CHANGED:
            return { ...state, [action.prop]: action.value, [action.prop + 'Error']: false };
        case LOGIN_PROP_ERROR:
            return { ...state, loading: false, [action.prop + 'Error']: true }
        case LOGIN_SUBMIT_STARTED:
            return { ...state, loading: true }
        case LOGIN_SUBMIT_SUCCES:
            return { ...INIT_STATE }
        case LOGIN_SUBMIT_FAILED:
            return { ...state, loading: false }
        default:
            return state;
    }
};