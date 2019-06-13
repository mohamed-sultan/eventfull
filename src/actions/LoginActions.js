import {
    LOGIN_PROP_CHANGED,
    LOGIN_PROP_ERROR,
    LOGIN_SUBMIT_STARTED,
    LOGIN_SUBMIT_SUCCES,
    LOGIN_SUBMIT_FAILED,
    SET_USER_OBJECT,
    LOG_OUT
} from './types'
import validator from 'validator';
import { Backend } from '../services/Backend';
import Toast from 'react-native-simple-toast';
import { AsyncStorage } from 'react-native'

export const onLoginPropChanged = (prop, value) => {
    return {
        type:LOGIN_PROP_CHANGED,
        prop,
        value
    }
}

export const loginSubmit = (navigation) => {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_SUBMIT_STARTED
        })
        let state = getState()
        const {
            email,
            password,
        } = state.login
        let invalidProp = false
        if(validator.isEmpty(email) || !validator.isEmail(email)){
            invalidProp = 'email'
        }else if(validator.isEmpty(password)){
            invalidProp = 'password'
        }
        if(invalidProp){
            return dispatch({
                type: LOGIN_PROP_ERROR,
                prop: invalidProp
            })
        }
        Backend.login(email, password).then(async (response) => {
            console.log(response)
            if(response){
                if(response.success === 'true'){
                    await AsyncStorage.multiSet([['token', response.data[0].api_token],['userObj', JSON.stringify(response.data[0])]])
                    Backend.token = response.data[0].api_token
                    dispatch({
                        type: LOGIN_SUBMIT_SUCCES,
                    })
                    
                    dispatch({
                        type: SET_USER_OBJECT,
                        userObj: response.data[0]
                    })
                    
                    navigation.navigate('TabNav')
                }else{
                    Toast.show(response.message)
                    dispatch({
                        type: LOGIN_SUBMIT_FAILED,
                    })  
                }
            }else{
                dispatch({
                    type: LOGIN_SUBMIT_FAILED,
                })
            }

        })
    }
}

export const logout = (navigation) => {
    return async (dispatch) => {
        await AsyncStorage.multiRemove(['token','userObj'])
        navigation.navigate('AuthStack')
        dispatch({
            type: LOG_OUT
        })
    }
}