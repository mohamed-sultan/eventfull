import React from 'react'
import { createStackNavigator, Back } from 'react-navigation'
import { 
    InvitationsList,
    EditTemplates,
    ShowTemplates
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

const InvitationStack = createStackNavigator({
    InvitationsList:{
        screen: InvitationsList,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.invitation,
            headerLeft: null
        })
    },
    EditTemplates:{
        screen: EditTemplates,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.editTemplates,
        })
    },
    ShowTemplates:{
        screen: ShowTemplates,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.viewTemplates,
        })
    }
}, {
    defaultNavigationOptions: stackNavigationOptionsWithBack
})

//HomeStack.navigationOptions = tabBarVisabilyFunc

export default InvitationStack;