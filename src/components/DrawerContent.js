
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { scale, verticalScale, moderateScale } from '../Helpers';
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import strings from '../strings';
import {
    logout
} from '../actions'
import { connect } from 'react-redux'

class DrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        }
    }
    icons = {
        Home: require('../assets/icons/drawer/home.png'),
        Points: require('../assets/icons/drawer/points.png'),
        FeedBack: require('../assets/icons/drawer/chat.png'),
        ContactUs: require('../assets/icons/drawer/support.png'),
        Settings: require('../assets/icons/drawer/setting.png'),
    }
    render() {

        const {
            navigation,
            items,
            activeItemKey,
            activeTintColor,
            inactiveTintColor,
            getLabel,
            onItemPress,
            logout,
            userObj
        } = this.props
        const {
            logoStyle,
            nameTextStyle,
            editProfileTextStyle,
            salonLogoStyle,
            itemsContainerStyle,
            rowContainerStyle,
            rowTextStyle,
            logoutContainerStyle,
            logoutIconStyle,
            logoutTextStyle,
            profilePicStyle,
            rowIconStyle
        } = styles
        return (
            <LinearGradient style={{ flex: 1 }} colors={['#FFFFFF', '#D8F6FF', '#FFC2F0']} locations={[.3,.6,1]} >
                <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1}} contentContainerStyle={{ alignItems: 'center' }} >
                    
                    <View style={itemsContainerStyle} >
                        {
                            items.map((route, index) => {
                                const focused = activeItemKey == route.key
                                const tintColor = focused ? activeTintColor : inactiveTintColor
                                return (
                                    <TouchableOpacity key={route.key} style={[rowContainerStyle]} onPress={() => onItemPress({ route, focused })} activeOpacity={.7} >
                                        <Image source={this.icons[route.key]} style={[rowIconStyle]}/>
                                        <Text style={[rowTextStyle, {color: tintColor}]} >
                                            {getLabel({ route })}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                        <TouchableOpacity style={logoutContainerStyle} onPress={() => (!userObj)?navigation.navigate('AuthStack'):logout(navigation)} >
                            <Text style={logoutTextStyle} >{(!userObj)?strings.login:strings.logout}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}

const mapStateToProps = ({user}) => {
    return{
        userObj: user.userObj
    }
}


const styles = StyleSheet.create({
    logoStyle:{
        width: scale(258),
        height: verticalScale(96),
        resizeMode: 'contain',
        marginTop: verticalScale(125)
    },
    nameTextStyle:{
        marginTop: verticalScale(86),
        fontSize: moderateScale(30.46),
        color: '#202020',
        textAlign: 'center'
    },
    editProfileTextStyle:{
        marginTop: verticalScale(7),
        fontSize: moderateScale(24.36),
        color: '#666666',
        opacity: .8,
        textAlign: 'center'
    },
    salonLogoStyle:{
        width: scale(175),
        height: scale(175),
        borderRadius: scale(87.5),
        resizeMode: 'contain',
        marginTop: verticalScale(78)
    },
    itemsContainerStyle:{
        marginTop: verticalScale(30),
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    rowContainerStyle: {
        alignSelf: 'stretch',
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(30),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rowTextStyle: {
        fontSize: moderateScale(36),
        textAlign: 'center'
    },
    logoutContainerStyle:{
        alignItems:'center',
        marginTop: verticalScale(100),
        marginBottom: verticalScale(30),
    },
    logoutIconStyle:{
        width: scale(47.83),
        height: verticalScale(53.03),
        resizeMode:'contain'
    },
    logoutTextStyle:{
        fontSize: moderateScale(33),
        color:'#202020',
        textAlign: 'center',
        marginTop: verticalScale(25)
    },
    profilePicStyle: {
        width: scale(175),
        height: scale(175),
        resizeMode: 'contain',
        borderRadius: scale(87.5),
        borderWidth: scale(7),
        borderColor: '#FFFFFF',
        marginVertical: verticalScale(40),
    },
    rowIconStyle:{
        width: scale(40),
        height: verticalScale(40),
        resizeMode: 'contain',
        marginRight: scale(16),
    }
});

export default connect(mapStateToProps, {
    logout
})(DrawerContent)