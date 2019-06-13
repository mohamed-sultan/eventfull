import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer';
import SignupReducer from './SignupReducer'
import EventsReducer from './EventsReducer'
import CategoriesReducer from './CategoriesReducer'
import ServicesReducer from './ServicesReducer'

export default combineReducers({
    login: LoginReducer,
    user: UserReducer,
    signup: SignupReducer,
    events: EventsReducer,
    categories: CategoriesReducer,
    services: ServicesReducer,
});