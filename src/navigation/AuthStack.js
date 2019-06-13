import { createStackNavigator, Back } from 'react-navigation'
import { 
    Login,
    SignUp,
    ForgetPassword,
    NewPassword,
    ConfirmCode,
 } from '../pages'
import React from 'react'
import { AuthNavigationOptions ,AuthHeader, RecHeaderWithBack} from './NavHelpers'
import { scale, verticalScale, moderateScale, width } from '../Helpers'
import strings from '../strings'

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <AuthHeader hedTitle={strings.login} hedSubTitle={strings.loginEnjoy} {...props}/>
        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <AuthHeader hedTitle={strings.signup} hedSubTitle={strings.createAcc} {...props}/>
        })
    },
    ForgetPassword:{
        screen: ForgetPassword,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.forgetPassword,
        })
    },
    NewPassword:{
        screen: NewPassword,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.newPassword,
        })
    },
    ConfirmCode:{
        screen: ConfirmCode,
        navigationOptions: ({ navigation }) => ({
            header: (props) => <RecHeaderWithBack   {...props}/>,
            title: strings.confirmationCode,
        })
    }
}, {
    defaultNavigationOptions: AuthNavigationOptions
})

export default AuthStack;