import React from 'react'
import { createStackNavigator, Back } from 'react-navigation'
import { 
    Notifications
 } from '../pages'
import { 
    stackNavigationOptions, 
    tabBarVisabilyFunc, 
    stackNavigationOptionsHomePage, 
    stackNavigationOptionsWithBack , 
    ImageHeaderWithBack,
    stackNavigationOptionsEvents,
    RecHeaderWithBack
} from './NavHelpers'
import {HeaderButton} from './HeaderComps'
import strings from '../strings'
import { verticalScale } from '../Helpers';

const NotificationStack = createStackNavigator({
    Notifications:{
        screen: Notifications,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.notifications,
            headerLeft: null
        })
    }
}, {
    defaultNavigationOptions: stackNavigationOptionsWithBack
})

//HomeStack.navigationOptions = tabBarVisabilyFunc

export default NotificationStack;