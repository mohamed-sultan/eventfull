import React from 'react'
import { createStackNavigator, Back } from 'react-navigation'
import { 
    BasketHomePage
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

const BasketStack = createStackNavigator({
    BasketHomePage:{
        screen: BasketHomePage,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.basket,
            headerLeft: null
        })
    }
}, {
    defaultNavigationOptions: stackNavigationOptionsWithBack
})

//HomeStack.navigationOptions = tabBarVisabilyFunc

export default BasketStack;