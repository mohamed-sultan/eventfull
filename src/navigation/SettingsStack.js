import React from 'react'
import { createStackNavigator, Back } from 'react-navigation'
import { 
    SettingHomepage,
    LangPage,
    AboutApp,
    AboutDev,
    TermsAndCondations,
    CustomerService,
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

const SettingsStack = createStackNavigator({
    SettingHomepage:{
        screen: SettingHomepage,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.settings,
            headerLeft: null
        })
    },
    LangPage:{
        screen: LangPage,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.language,
        })
    },
    AboutApp:{
        screen: AboutApp,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.aboutApp,
        })
    },
    AboutDev:{
        screen: AboutDev,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.aboutDev,
        })
    },
    TermsAndCondations:{
        screen: TermsAndCondations,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.termsAndCond,
        })
    },
    CustomerService:{
        screen: CustomerService,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.customerService,
        })
    }
}, {
    defaultNavigationOptions: stackNavigationOptionsWithBack
})

//HomeStack.navigationOptions = tabBarVisabilyFunc

export default SettingsStack;