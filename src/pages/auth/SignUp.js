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
    FlatList
} from 'react-native';
import { Container, AuthInput, Button, Spinner, EmptyPage } from '../../components/common'
import { verticalScale, scale, width, height, moderateScale } from '../../Helpers'
import strings from '../../strings';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import {
    onSignupPropChanged,
    signupSubmit,
    fetchCities
} from '../../actions'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
  } from "react-native-popup-menu";
class Login extends React.Component {
    componentDidMount(){
        this.props.fetchCities()
    }
    render() {

        const {
            navigation,
            name,
            mobile,
            password,
            passwordConfirmation,
            email,
            type,
            emailError,
            loading,
            city,
            cityError,
            nameError,
            mobileError,
            passwordError,
            passwordConfirmationError,
            onSignupPropChanged,
            pageLoading,
            pageError,
            cities,
            fetchCities,
            signupSubmit
        } = this.props
        const navigate = navigation.navigate

        const {
            contentContainerStyle,
            InputSepratorStyle,
            ForgetPasswordTextStyle,
            ForgetPasswordContainer,
            ButtonContainerStyle,
            ButtonTextStyle,
            signUpContainerStyle,
            signUpFirstTextStyle,
            signUpSecTextStyle,
            dropdownTriggerContainerStyle,
            dropdownTextStyle,
            dropdownArrowStyle,
            optionsContainerStyle,
            optionTextStyle,
            dropdownSeparator,
        } = styles
        if(pageLoading || pageError){
            return (
                <EmptyPage loading={pageLoading} error={pageError} onReload={fetchCities}/>
            )
        }
        return (
            <Container style={{backgroundColor: '#fff'}}> 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={true}
                    style={{flex:1}}
                    contentContainerStyle={contentContainerStyle}
                >
                    <AuthInput 
                        value={name}
                        error={nameError}
                        onChangeText={(value) => onSignupPropChanged('name', value)}
                        placeholder={strings.yourName}
                    />
                    <AuthInput 
                        style={InputSepratorStyle}
                        value={mobile}
                        error={mobileError}
                        onChangeText={(value) => onSignupPropChanged('mobile', value)}
                        placeholder={strings.phoneNumber}
                    />
                    <AuthInput 
                        style={[InputSepratorStyle, {marginBottom: verticalScale(20)}]}
                        value={email}
                        error={emailError}
                        onChangeText={(value) => onSignupPropChanged('email', value)}
                        placeholder={strings.email}
                    />
                    <Menu
                        renderer={renderers.Popover}
                        onSelect={value => onSignupPropChanged('city', value)}
                        rendererProps={{
                            anchorStyle: { opacity: 0, height: 0 },
                            preferredPlacement: "bottom"
                        }}
                    >
                        <MenuTrigger>
                            <View style={[dropdownTriggerContainerStyle]}>
                            <Text style={[dropdownTextStyle]}>{city ? city.name : strings.city}</Text>
                            <Image
                                source={require("../../assets/icons/other/downarrow.png")}
                                style={dropdownArrowStyle}
                            />
                            </View>
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={optionsContainerStyle}>
                            <FlatList
                                data={cities}
                                style={{ height: verticalScale(100) }}
                                ItemSeparatorComponent={() => <View style={dropdownSeparator} />}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) =><MenuOption value={item} customStyles={{ optionWrapper: { padding:15 }}}>
                                                            <Text style={optionTextStyle}>{item.name}</Text>
                                                        </MenuOption> }
                            />
                        </MenuOptions>
                    </Menu>
                    <AuthInput 
                        style={InputSepratorStyle}
                        value={password}
                        error={passwordError}
                        onChangeText={(value) => onSignupPropChanged('password', value)}
                        placeholder={strings.password}
                        secureTextEntry={true}
                    />
                    <AuthInput 
                        style={InputSepratorStyle}
                        value={passwordConfirmation}
                        error={passwordConfirmationError}
                        onChangeText={(value) => onSignupPropChanged('passwordConfirmation', value)}
                        placeholder={strings.passwordConfirmation}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={ButtonContainerStyle} onPress={() => signupSubmit(navigation)}>
                        <Text style={ButtonTextStyle}>{strings.signup}</Text>
                    </TouchableOpacity>
                    <View style={signUpContainerStyle}>
                        <Text style={signUpFirstTextStyle}>{strings.youHaveAcc}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={signUpSecTextStyle}>  {strings.loginNow}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const mapStateToProps = ({signup}) => {
    const {
        name,
        mobile,
        password,
        passwordConfirmation,
        email,
        type,
        emailError,
        loading,
        city,
        cityError,
        nameError,
        mobileError,
        passwordError,
        passwordConfirmationError,
        pageLoading,
        pageError,
        cities
    } = signup
    return {
        name,
        mobile,
        password,
        passwordConfirmation,
        email,
        type,
        emailError,
        loading,
        city,
        cityError,
        nameError,
        mobileError,
        passwordError,
        passwordConfirmationError,
        pageLoading,
        pageError,
        cities
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingTop: verticalScale(200),
        paddingBottom: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    HeaderStyle:{
        height: verticalScale(207),
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    InputSepratorStyle:{
        marginTop: verticalScale(20)
    },
    HeaderTextMainStyle:{
        fontSize: moderateScale(50),
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginTop: verticalScale(40)
    },
    HeaderTextSecStyle:{
        fontSize: moderateScale(14),
        color: '#fff',
        textAlign: 'center',
    },
    ForgetPasswordContainer:{
        marginLeft: scale(140),
        alignItems: 'center',
        marginTop: verticalScale(12)
    },
    ForgetPasswordTextStyle:{
        fontSize: moderateScale(12),
        color: '#6B55A3',
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
        shadowOpacity: 1
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
    },
    dropdownTriggerContainerStyle: {
      paddingHorizontal: scale(26),
      flexDirection: "row",
      justifyContent: "space-between",
      width: scale(286),
      height: verticalScale(43),
      borderRadius: verticalScale(22),
      borderColor: "rgba(112,112,112,.1)",
      borderWidth: 1,
      backgroundColor: "#fff",
      alignItems: "center"
    },
    optionsContainerStyle: {
      width: scale(286),
      backgroundColor: "#fff"
    },
    optionTextStyle: {
      color: "#000",
      fontSize: moderateScale(14),
      textAlign: "left"
    },
    dropdownSeparator: {
      height: 1,
      backgroundColor: "#707070",
      opacity: 0.47
    },
    dropdownArrowStyle: {
      height: verticalScale(14.5),
      width: scale(9),
      resizeMode: "contain"
    },
    dropdownTextStyle: {
      textAlign: "left",
      fontSize: moderateScale(14)
    },
})

export default connect(mapStateToProps,{
    onSignupPropChanged,
    signupSubmit,
    fetchCities
})(Login);