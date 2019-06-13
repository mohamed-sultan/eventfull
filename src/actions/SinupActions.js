import {
    SIGNUP_PROP_CHANGED,
    SIGNUP_PROP_ERROR,
    SIGNUP_SUBMIT_STARTED,
    SIGNUP_SUBMIT_SUCCES,
    SIGNUP_SUBMIT_FAILED,
    SET_USER_OBJECT,
    SIGNUP_GET_CITY_STARTED,
    SIGNUP_GET_CITY_SUCCESS,
    SIGNUP_GET_CITY_FAILED,
    FETCH_CITIES_STARTED,
    FETCH_CITIES_FAILED,
    FETCH_CITIES_SUCCESS
} from './types'
import validator from 'validator';
import { Backend } from '../services/Backend';
import Toast from 'react-native-simple-toast';
import { AsyncStorage } from 'react-native'

export const onSignupPropChanged = (prop, value) => {
    return {
        type:SIGNUP_PROP_CHANGED,
        prop,
        value
    }
}


export const fetchCities = () => (dispatch) => {
    dispatch({
        type: FETCH_CITIES_STARTED
    })
    Backend.fetchCities().then(async (response) => {
        console.log(response)
        if(response){
            if(response.success === 'true'){
                dispatch({
                    type: FETCH_CITIES_SUCCESS,
                    data: response.data
                })
            }else{
                Toast.show(response.message)
                dispatch({
                    type: FETCH_CITIES_FAILED,
                })  
            }
        }else{
            dispatch({
                type: FETCH_CITIES_FAILED,
            })
        }

    })
}

export const signupSubmit = (navigation) => {
    return (dispatch, getState) => {
        dispatch({
            type: SIGNUP_SUBMIT_STARTED
        })
        let state = getState()
        const {
            name,
            email,
            mobile,
            password,
            passwordConfirmation,
            city,
            type,
        } = state.signup
        let invalidProp = false
        if(validator.isEmpty(name)){
            invalidProp = 'name'
        }else if(!validator.isEmpty(email)){
            if(!validator.isEmail(email)){
                invalidProp = 'email'
            }
        }else if(!validator.isMobilePhone(mobile)){
            invalidProp = 'mobile'
        }else if(!city){
            invalidProp = 'city'
        }else if(validator.isEmpty(password)){
            invalidProp = 'password'
        }else if(passwordConfirmation != password){
            invalidProp = 'passwordConfirmation'
        }

        if(invalidProp){
            return dispatch({
                type: SIGNUP_PROP_ERROR,
                prop: invalidProp
            })
        }

        let data = {
            email,
            mobile,
            first_name: name,
            password,
            c_password: password,
            city_id: city.id,
        }
        Backend.signup(data).then(async (response) => {
            console.log(response)
            if(response){
                if(response.success === 'true'){
                    await AsyncStorage.multiSet([['token', response.data[0].api_token],['userObj', JSON.stringify(response.data[0])]])
                    Backend.token = response.data[0].api_token
                    dispatch({
                        type: SIGNUP_SUBMIT_SUCCES,
                    })
                    dispatch({
                        type: SET_USER_OBJECT,
                        userObj: response.data[0]
                    })
                    navigation.navigate('TabNav')
                }else{
                    Toast.show(response.message)
                    dispatch({
                        type: SIGNUP_SUBMIT_FAILED,
                    })  
                }
            }else{
                dispatch({
                    type: SIGNUP_SUBMIT_FAILED,
                })
            }

        })
    }
}