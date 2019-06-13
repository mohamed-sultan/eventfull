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


export default AddToCardModal = (props) => {
    const {
        opened,
        openBasket,
        keepBrowsing
    } = props
    const {
        modalContainerStyle,
        modalInnerContainer,
        almostDoneTextStyle,
        phaseTextStyle,
        GotoButtonContainerStyle,
        buttonTextStyle,
        keepContainerStyle,
        keepTextStyle
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
                <Text style={almostDoneTextStyle}>{strings.almostDone}</Text>
                <Text style={phaseTextStyle}>{strings.yourOrderAdded}</Text>
                <TouchableOpacity style={GotoButtonContainerStyle} onPress={openBasket}>
                    <LinearGradient
                        colors={['#2CB895', '#14ACE3']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={GotoButtonContainerStyle}
                    >
                        <Text style={buttonTextStyle}>{strings.gotoCard}</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={keepContainerStyle} onPress={keepBrowsing}>
                    <Text style={keepTextStyle}>{strings.keepBrowsing}</Text>
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
        paddingTop: verticalScale(65)
    },
    modalInnerContainer: {
        width: scale(329),
        height: verticalScale(284),
        borderRadius: moderateScale(10),
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: verticalScale(42)
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
        width: scale(173),
        height: verticalScale(44),
        borderRadius: moderateScale(22),
        marginTop: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(44,184,149,0.5)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
        shadowOpacity: 1,
        //elevation: 1
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
    }
}