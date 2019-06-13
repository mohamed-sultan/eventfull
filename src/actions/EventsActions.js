import {
    FETCH_EVENTS_STARTED,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILED
} from './types'
import { Backend } from '../services/Backend';
import Toast from 'react-native-simple-toast';
import { AsyncStorage } from 'react-native'


export const fetchEvents = () => (dispatch) => {
        dispatch({
            type: FETCH_EVENTS_STARTED
        })
        Backend.getEvents().then(async (response) => {
            console.log(response)
            if(response){
                dispatch({
                    type: FETCH_EVENTS_SUCCESS,
                    data: response.data
                })
            }else{
                dispatch({
                    type: FETCH_EVENTS_FAILED,
                })
            }

        })
}