import {
    FETCH_CATEGORIES_STARTED,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILED,
    CLEAN_UP_CATEGORIES,
    REFRESH_CATEGORIES,
    PAGINATE_CATEGORIES_DATA,
} from './types'
import { Backend } from '../services'
import strings from '../strings'
import Toast from 'react-native-simple-toast'


export const fetchCategories = () => {
    return(dispatch, getState) => {
        let index = getState().categories.index
        Backend.fetchCategories(index).then((response) => {
            if(response){
                dispatch({
                    type: FETCH_CATEGORIES_SUCCESS,
                    data: response.data,
                    moreData: response.meta.last_page > index ? true : false
                })
            }else{
                Toast.show(strings.anErrorOccured)
                dispatch({
                    type: FETCH_CATEGORIES_FAILED
                })
            }
        })
    }
}

export const getCategories = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_CATEGORIES_STARTED
        })
        dispatch(fetchCategories())
    }
}


export const refreshCategories = () => {
    return (dispatch) => {
        dispatch({
            type: REFRESH_CATEGORIES
        })
        dispatch(fetchCategories())
    }
}

export const cleanCategories = () => {
    return {
        type: CLEAN_UP_CATEGORIES
    }
}

export const categoriesPagination = () => (dispatch, getState) => {
    let index = getState().categories.index + 1
    dispatch({
        type:PAGINATE_CATEGORIES_DATA,
        index
    })
    dispatch(fetchCategories())
}

