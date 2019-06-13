import {
    SIGNUP_PROP_CHANGED,
    SIGNUP_PROP_ERROR,
    SIGNUP_SUBMIT_STARTED,
    SIGNUP_SUBMIT_SUCCES,
    SIGNUP_SUBMIT_FAILED,
    SIGNUP_GET_CITY_STARTED,
    SIGNUP_GET_CITY_SUCCESS,
    SIGNUP_GET_CITY_FAILED,
    FETCH_CITIES_STARTED,
    FETCH_CITIES_FAILED,
    FETCH_CITIES_SUCCESS
} from '../actions/types';

const INIT_STATE = {
    pageLoading: true,
    pageError: false,
    cities: [],
    name: '',
    mobile: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    type: '',
    emailError: false,
    loading: false,
    city: '',
    cityError: false,
    nameError: false,
    mobileError: false,
    passwordError: false,
    passwordConfirmationError: false,
};


export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case SIGNUP_PROP_CHANGED:
            return { ...state, [action.prop]: action.value, [action.prop + 'Error']: false };
        case SIGNUP_PROP_ERROR:
            return { ...state, loading: false, [action.prop + 'Error']: true }
        case SIGNUP_SUBMIT_STARTED:
            return { ...state, loading: true }
        case SIGNUP_SUBMIT_SUCCES:
            return { ...INIT_STATE }
        case SIGNUP_SUBMIT_FAILED:
            return { ...state, loading: false }
        case FETCH_CITIES_STARTED:
            return {pageLoading: true, pageError: false}
        case FETCH_CITIES_FAILED:
            return {pageLoading: false, pageError: true}
        case FETCH_CITIES_SUCCESS:
            return {pageError: false, pageLoading: false, cities: action.data}
        default:
            return state;
    }
};