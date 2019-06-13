import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Text,
    Image,
    I18nManager,
    TextInput,
    ImageBackground,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Container, Button, EmptyPage } from '../components/common'
import { verticalScale, scale, width, height, moderateScale } from '../Helpers'
import strings from '../strings'
import {
    
} from '../actions'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';


class Home extends React.Component {
   
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
       
    }
    
    render() {

        const {
            welcomeContainerStyle,
            welcomeTextStyle,
            usernameTextStyle,
            homeMsgStyle,
            headerContainerStyle,
            imageStyle,
            serviceButtonContainerStyle,
            buttonTextStyle,
            eventButtonContainerStyle,
            inputStyle,
            inputContainerStyle,
            inputIconStyle
        } = styles
        const {
            navigation,
            userObj
        } = this.props
        return (
            <Container>
                <View style={headerContainerStyle}>
                    <View style={inputContainerStyle}>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
                            <Image source={require('../assets/icons/other/search.png')} style={inputIconStyle}/>
                        </TouchableOpacity>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={[inputStyle,]}
                            placeholder={strings.search}
                            placeholderTextColor={'rgba(185,183,184,0.46)'}
                            autoCorrect={false}
                            onChangeText={(value) => console.log(value)}
                            value={ '' }
                            autoCapitalize='none'
                            enablesReturnKeyAutomatically={true}
                            onSubmitEditing={() => navigation.navigate('SearchPage')}
                            returnKeyType={'search'}
                        />  
                    </View>
                    <View style={welcomeContainerStyle}>
                        <Text style={welcomeTextStyle}>{strings.welcome}</Text>
                        <Text style={usernameTextStyle}>{userObj.first_name}</Text>
                    </View>
                    <Text style={homeMsgStyle}>{strings.homePharase}</Text>
                </View>
                <Image style={imageStyle} source={require('../assets/images/homepageImage.png')} resizeMode={'cover'}/>
                
                <TouchableOpacity style={serviceButtonContainerStyle} onPress={() => navigation.navigate('OurServices')}>
                    <LinearGradient
                        colors={['#2CB895', '#14ACE3']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={serviceButtonContainerStyle}
                    >
                        <Text style={buttonTextStyle}>{strings.service}</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={eventButtonContainerStyle} onPress={() => navigation.navigate('EventsHomepage')}>
                    <LinearGradient
                        colors={['#E7128C', '#6B55A3']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={eventButtonContainerStyle}
                    >
                        <Text style={buttonTextStyle}>{strings.event}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    headerContainerStyle:{
        paddingTop: verticalScale(40),
        alignSelf: 'flex-start',
        paddingHorizontal: scale(33)
    },
    welcomeContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeTextStyle:{
        fontSize: moderateScale(35),
        fontWeight: '600',
        color: '#000',
        textAlign: 'left'
    },
    usernameTextStyle:{
        fontSize: moderateScale(25),
        color: '#5C5C5C',
        textAlign: 'right',
        marginLeft: scale(10),
        marginTop: verticalScale(3)
    },
    homeMsgStyle:{
        fontSize: moderateScale(14),
        color: 'rgba(0,0,0,0.46)',
        textAlign: 'left',
    },
    imageStyle:{
        width: '100%',
        height: verticalScale(213)
    },
    serviceButtonContainerStyle:{
        width: scale(235),
        height: verticalScale(61),
        borderRadius: moderateScale(31),
        marginTop: verticalScale(24),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(44,184,149,0.3)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1
    },
    buttonTextStyle:{
        fontSize: moderateScale(20),
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    eventButtonContainerStyle:{
        width: scale(235),
        height: verticalScale(61),
        borderRadius: moderateScale(31),
        marginTop: verticalScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(175,102,168,0.3)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1
    },
    inputStyle:{
        fontSize: moderateScale(16),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        flex:1,
        marginLeft: scale(13),
        paddingRight: scale(25),
        height: verticalScale(40),
        textAlignVertical: 'center',
        color: 'rgba(185,183,184,0.46)'
    },
    inputContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: scale(309),
        height: verticalScale(40),
        borderRadius: verticalScale(22),
        borderColor: 'rgba(112,112,112,.1)',
        borderWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: 'rgba(185,183,184,0.1)',
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 3,
        marginBottom: verticalScale(20)
    },
    inputIconStyle:{
        width: scale(16),
        height: verticalScale(16),
        resizeMode: 'contain',
        tintColor: '#AF66A8',
        marginLeft: scale(12),
    }
})

const mapStateToProps = ({user }) => {
    const {
        userObj
    } = user
    return {
        userObj
    } 
}

export default connect(mapStateToProps,{
    
})(Home);