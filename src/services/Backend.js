import { I18nManager, NetInfo, Platform, Alert } from 'react-native'
import Toast from 'react-native-simple-toast';
import * as axios from 'axios';
import { BASE_URL } from '../constants';
import strings from '../strings'
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

function handleRequestError() {
    NetInfo.isConnected.fetch().then(isConnected => {
        setTimeout(() => {
            if (!isConnected) {
                Toast.show(strings.noInternetConnection);
            }
        })
    });
}


export const Backend = {
    token: '',
    lang: I18nManager.isRTL?'ar':'en',

    login(email, password) {
        console.log(email)
        console.log(password)
        return axios.post('login',
            JSON.stringify({
                email,
                password,
            }),
            {
                headers: {
                    lang: this.lang
                }
            }
        )
        .then(function (response) {
            console.log(response)
            return response.data;
        })
        .catch(function (err) {
            console.log(err.response)
            handleRequestError();
            return err
        });
    },
    signup(data) {
        return axios.post('register',
            JSON.stringify(data),
            {
                headers: {
                    lang: this.lang
                }
            }
        )
        .then(function (response) {
            console.log(response)
            return response.data;
        })
        .catch(function (err) {
            handleRequestError();
            return err
        });
    },
   getEvents(){
        return axios.get(`events`,
        {
            headers: {
                Authorization: `Bearer ${this.token}`,
                lang: this.lang
            }
        }
        )
        .then(function (response) {
            console.log(response)
            return response.data;
        })
        .catch(function (err) {
            const response = err.response? err.response.data:undefined
            handleRequestError(response);
            return response
        });
   },
   fetchCategories(index){
        return axios.get(`categories?page=${index}`,
        {
            headers: {
                Authorization: `Bearer ${this.token}`,
                lang: this.lang
            }
        }
        )
        .then(function (response) {
            console.log(response)
            return response.data;
        })
        .catch(function (err) {
            const response = err.response? err.response.data:undefined
            handleRequestError(response);
            return response
        });
   },
   fetchCities(){
    return axios.get(`cities`,
    {
        headers: {
            lang: this.lang
        }
    }
    )
    .then(function (response) {
        console.log(response)
        return response.data;
    })
    .catch(function (err) {
        const response = err.response? err.response.data:undefined
        handleRequestError(response);
        return response
    });
   },
   fetchServices(index, id){
    return axios.get(`category/gender/${id}/1?page=${index}&indexpage=21`,
    {
        headers: {
            Authorization: `Bearer ${this.token}`,
            lang: this.lang
        }
    }
    )
    .then(function (response) {
        console.log(response)
        return response.data;
    })
    .catch(function (err) {
        const response = err.response? err.response.data:undefined
        handleRequestError(response);
        return response
    });
   }
}