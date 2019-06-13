import {
    FETCH_SERVICES_STARTED,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILED,
    CLEAN_UP_SERVICES,
    REFRESH_SERVICES,
    PAGINATE_SERVICES_DATA,
    CHANGE_SELECTED_SERVICES,
} from './types'
import { Backend } from '../services'
import strings from '../strings'
import Toast from 'react-native-simple-toast'


export const fetchServices = (id) => {
    return(dispatch, getState) => {
        let index = getState().services.index
        Backend.fetchServices(index, id).then((response) => {
            if(response){
                if(response.success === 'true'){
                    dispatch({
                        type: FETCH_SERVICES_SUCCESS,
                        data: response.data,
                        moreData:  response.hasMorePages
                    })
                }else{
                    Toast.show(response.message)
                    dispatch({
                        type: FETCH_SERVICES_FAILED
                    })
                }
               
            }else{
                Toast.show(strings.anErrorOccured)
                dispatch({
                    type: FETCH_SERVICES_FAILED
                })
            }
        })
    }
}

export const getServices = (id) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_SERVICES_STARTED
        })
        dispatch(fetchServices(id))
    }
}


export const refreshServices = (id) => {
    return (dispatch) => {
        dispatch({
            type: REFRESH_SERVICES
        })
        dispatch(fetchServices(id))
    }
}

export const cleanServices = () => {
    return {
        type: CLEAN_UP_SERVICES
    }
}

export const servicesPagination = (id) => (dispatch, getState) => {
    let index = getState().services.index + 1
    dispatch({
        type:PAGINATE_SERVICES_DATA,
        index
    })
    dispatch(fetchServices(id))
}

export const changeSelected  = (id) => (dispatch, getState) => {
    const oldSelected = getState().services.selected;
    let newSelected = []
    let found = false
    oldSelected.map((item) => {
        if(item == id){
            found = true
        }else{
            newSelected.push(item)
        }
    })
   if(!found){
       newSelected = [...oldSelected, id]
   }
   dispatch({
       type: CHANGE_SELECTED_SERVICES,
       selected: newSelected
   })
}