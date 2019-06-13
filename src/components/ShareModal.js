import React from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { width, verticalScale, scale, moderateScale, height } from '../Helpers'
import strings from '../strings'
import Modal from 'react-native-modalbox'
import LinearGradient from 'react-native-linear-gradient';


export default ShareModal = (props) => {
    const {
        opened,
        openBasket,
        keepBrowsing,
        
    } = props
    const {
        modalContainerStyle,
        modalInnerContainer,
        almostDoneTextStyle,
        phaseTextStyle,
        socialButtonContainerStyle,
        socialIconStyle,
        buttonTextStyle,
        keepContainerStyle,
        keepTextStyle,
        hrStyle,
        orTextStyle,
        GotoButtonContainerStyle,
        cancelContainerStyle,
        cancelTextStyle
    } = styles
    return(
        <Modal
            isOpen={opened}
            //backButtonClose={true}
            position={"center"}
            onClosed={keepBrowsing}
            swipeToClose={false}
            backdropPressToClose={true}
            style={modalContainerStyle}
            backdropOpacity={0.15}
            coverScreen={true}
        >
            <View style={modalInnerContainer} >
                <Text style={almostDoneTextStyle}>{strings.share}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: verticalScale(20), width: scale(156)}}>
                    <TouchableOpacity style={socialButtonContainerStyle}>
                        <Image style={socialIconStyle} source={require('../assets/icons/other/facebook.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[socialButtonContainerStyle, {backgroundColor: '#1DA1F2'}]}>
                        <Image style={[socialIconStyle, {width: scale(22.73), height: verticalScale(18.47)}]} source={require('../assets/icons/other/twitter.png')}/>
                    </TouchableOpacity>
                    <LinearGradient
                        colors={['#861BAD', '#DA2177']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={[socialButtonContainerStyle, {backgroundColor: 'transparent'}]}
                    >
                        <Image style={[socialIconStyle, {width: scale(18.48), height: verticalScale(18.48)}]} source={require('../assets/icons/other/instagram.png')}/>
                    </LinearGradient>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: verticalScale(25)}}>
                    <View style={hrStyle}/>
                    <Text style={orTextStyle}>{strings.or}</Text>
                    <View style={hrStyle}/>
                </View>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#2CB895', '#14ACE3']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={GotoButtonContainerStyle}
                    >
                        <Text style={buttonTextStyle}>{strings.asInvitation}</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={cancelContainerStyle} onPress={keepBrowsing}>
                    <Text style={cancelTextStyle}>{strings.cancel}</Text>
                </TouchableOpacity>
                
            </View>
        </Modal>
    )
}

const styles = {
    modalContainerStyle: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        paddingTop: verticalScale(70)
    },
    modalInnerContainer: {
        width: scale(329),
        height: verticalScale(320),
        borderRadius: moderateScale(10),
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: verticalScale(42),
    },
    almostDoneTextStyle:{
        fontSize: moderateScale(35),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    phaseTextStyle:{
        fontSize: moderateScale(14),
        color: '#000',
        textAlign: 'center',
        marginTop: verticalScale(9)
    },
    GotoButtonContainerStyle:{
        width: scale(203),
        height: verticalScale(44),
        borderRadius: moderateScale(22),
        marginTop: verticalScale(23),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(44,184,149,0.25)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 2
    },
    buttonTextStyle:{
        fontSize: moderateScale(14),
        color: '#fff',
        textAlign: 'center',
    },
    keepContainerStyle:{
        marginTop: verticalScale(28),
    },
    keepTextStyle:{
        fontSize: moderateScale(14),
        color: '#B9B7B8',
        textAlign: 'center',
        marginTop: verticalScale(28),
    },
    socialButtonContainerStyle:{
        width: scale(43.35),
        height: scale(43.35),
        borderRadius: scale(43.35 / 2),
        backgroundColor: '#345199',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIconStyle:{
        width: scale(9.8),
        height: verticalScale(18.48),
        resizeMode: 'contain'
    },
    hrStyle:{
        height: verticalScale(1),
        width: scale(106),
        backgroundColor: 'rgba(185,183,184,0.28)',
        marginRight: scale(13),
    },
    orTextStyle:{
        fontSize: moderateScale(16),
        color: 'rgba(185,183,184,0.28)',
        textAlign: 'center',
        marginRight: scale(13),
    },
    cancelContainerStyle:{
        marginTop: verticalScale(18)
    },
    cancelTextStyle:{
        fontSize: moderateScale(14),
        color: '#B9B7B8',
        textAlign: 'center',
        marginRight: scale(13),
    }
}