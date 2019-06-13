import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    I18nManager,
    TextInput,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Platform,
    AsyncStorage
} from 'react-native';
import { Container, AuthInput, Button, Spinner } from '../../components/common'
import { verticalScale, scale, width, height, moderateScale } from '../../Helpers'
import strings from '../../strings';
import LinearGradient from 'react-native-linear-gradient'
import { Backend } from '../../services/Backend';
import { connect } from 'react-redux'
import {
    onLoginPropChanged,
    loginSubmit
} from '../../actions'

class Login extends React.Component {
    async componentDidMount(){
        let token = await AsyncStorage.getItem('token');
        if(token != null){
            Backend.token = token
            this.props.navigation.navigate('TabNav')
        }
    }
    render() {

        const {
            navigation,
            email,
            password,
            loading,
            emailError,
            passwordError,
            onLoginPropChanged,
            loginSubmit
        } = this.props
        const navigate = navigation.navigate

        const {
            contentContainerStyle,
            HeaderStyle,
            InputSepratorStyle,
            HeaderTextMainStyle,
            HeaderTextSecStyle,
            ForgetPasswordTextStyle,
            ForgetPasswordContainer,
            ButtonContainerStyle,
            ButtonTextStyle,
            signUpContainerStyle,
            signUpFirstTextStyle,
            signUpSecTextStyle,
        } = styles
        return (
            <Container style={{backgroundColor: '#fff'}}> 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    style={{flex:1}}
                    contentContainerStyle={contentContainerStyle}
                >
                    <AuthInput 
                        //style={InputSepratorStyle}
                        value={email}
                        error={emailError}
                        onChangeText={(value) => onLoginPropChanged('email', value)}
                        placeholder={strings.email}
                    />
                    <AuthInput 
                        style={InputSepratorStyle}
                        value={password}
                        error={passwordError}
                        onChangeText={(value) => onLoginPropChanged('password', value)}
                        placeholder={strings.password}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={ForgetPasswordContainer} onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text style={ForgetPasswordTextStyle}>{strings.forgotPasswordQues}</Text>
                    </TouchableOpacity>
                    {
                        loading ? <Spinner size={'large'}/> : 
                    <TouchableOpacity style={ButtonContainerStyle} onPress={() => loginSubmit(navigation)}>
                        <Text style={ButtonTextStyle}>{strings.login}</Text>
                    </TouchableOpacity>
                    }
                    <View style={signUpContainerStyle}>
                        <Text style={signUpFirstTextStyle}>{strings.dontHaveAnAccount}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={signUpSecTextStyle}>  {strings.signupNow}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const mapStateToProps = ({login}) => {
    const {
        email,
        password,
        loading,
        emailError,
        passwordError,
    } = login
    return {
        email,
        password,
        loading,
        emailError,
        passwordError,
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        marginTop: verticalScale(100),
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    InputSepratorStyle:{
        marginTop: verticalScale(20)
    },
    ForgetPasswordContainer:{
        marginLeft: scale(140),
        alignItems: 'center',
        marginTop: verticalScale(12)
    },
    ForgetPasswordTextStyle:{
        fontSize: moderateScale(12),
        color: '#000000',
        textAlign: 'right',
    },
    ButtonContainerStyle:{
        marginTop: verticalScale(52),
        width: scale(175),
        height: verticalScale(44),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B55A3',
        borderRadius: moderateScale(22),
        shadowColor: 'rgba(107,85,163,0.3)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 5
    },
    ButtonTextStyle:{
        fontSize: moderateScale(14),
        color: '#fff',
        textAlign: 'center',
    },
    signUpContainerStyle:{
        flexDirection: 'row',
        marginTop: verticalScale(37), 
    },
    signUpFirstTextStyle:{
        fontSize: moderateScale(12),
        color: '#000',
        textAlign: 'left',
    },
    signUpSecTextStyle:{
        fontSize: moderateScale(12),
        color: '#AF66A8',
        textAlign: 'right',
        textDecorationLine: 'underline'
    }
})

export default connect(mapStateToProps,{
    onLoginPropChanged,
    loginSubmit
})(Login);