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


export default ChooseGenderModal = (props) => {
    const {
        opened,
        openService,
        keepBrowsing,
        gender
    } = props
    const {
        modalContainerStyle,
        modalInnerContainer,
        almostDoneTextStyle,
        phaseTextStyle,
        buttonTextStyle,
        chooseContainerStyle,
        selectPaymentContainerStyle,
        selectCircleStyle,
        hrStyle
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
        >
            <View style={modalInnerContainer} >
                <Text style={almostDoneTextStyle}>{strings.bookingFor}</Text>
                <Text style={[phaseTextStyle, {marginTop: verticalScale(9)}]}>{strings.orderMadeTo}</Text>
                <View style={{marginTop: verticalScale(34), paddingLeft: scale(15)}}>
                    <View style={chooseContainerStyle}>
                        <TouchableOpacity style={[selectPaymentContainerStyle, gender == 1 && {borderColor: '#6B55A3'}]}>
                            {
                                gender == 1 &&
                                <View style={selectCircleStyle}/>
                            }
                        </TouchableOpacity>
                        <Text style={phaseTextStyle}>{strings.forMale}</Text>
                    </View>
                    <View style={[chooseContainerStyle, {marginTop: verticalScale(30)}]}>
                        <TouchableOpacity style={[selectPaymentContainerStyle, gender == 2 && {borderColor: '#6B55A3'}]}>
                            {
                                gender == 2 &&
                                <View style={selectCircleStyle}/>
                            }
                        </TouchableOpacity>
                        <Text style={phaseTextStyle}>{strings.forFemale}</Text>
                    </View>
                </View>
                <View style={hrStyle}/>
                <View style={[chooseContainerStyle, {position: 'absolute', bottom: verticalScale(26), left: scale(15), right: scale(15), justifyContent: 'space-between'}]}>
                    <TouchableOpacity onPress={keepBrowsing}>
                        <Text style={buttonTextStyle}>{strings.cancel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openService}>
                        <Text style={[buttonTextStyle, {textAlign: 'right', color: '#14ACE3'}]}>{strings.next}</Text>
                    </TouchableOpacity>
                </View>
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
        //paddingTop: verticalScale(65)
    },
    modalInnerContainer: {
        width: scale(329),
        height: verticalScale(325),
        borderRadius: moderateScale(10),
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingVertical: verticalScale(30),
        paddingHorizontal: scale(19)
    },
    hrStyle:{
        position: 'absolute',
        bottom: verticalScale(63),
        left: 0,
        right: 0,
        height: verticalScale(1),
        backgroundColor: 'rgba(185,183,184,0.36)',
        marginTop: verticalScale(44)
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
        //marginTop: verticalScale(9)
    },
    chooseContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectPaymentContainerStyle:{
        width: scale(18),
        height: scale(18),
        borderRadius: scale(9),
        borderWidth: scale(1),
        borderColor: '#B9B7B8',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginRight: scale(16)
    },
    selectCircleStyle:{
        width: scale(12.66),
        height: scale(12.66),
        borderRadius: scale(6.33),
        backgroundColor: '#6B55A3'
    },
    buttonTextStyle:{
        fontSize: moderateScale(16),
        color: '#B9B7B8',
        textAlign: 'left',
    }
}