import React from 'react'
import { View, Image, TextInput, StyleSheet, TouchableOpacity, I18nManager, Text } from 'react-native'
import { scale, verticalScale, moderateScale, width } from '../../Helpers';
import LinearGradient from 'react-native-linear-gradient';


export default SubmitButton = (props) => {
    const { onPress,showIcon , icon, iconStyle, containerStyle, textStyle, gradientColor, buttonText } = props
    return(
        <TouchableOpacity style={[styles.ContainerStyle, containerStyle]} onPress={onPress}>
                {
                    showIcon ? <Image style={[styles.iconStyle, iconStyle]} source={icon}/> : <View style={{width: 0, height: 0}}/>
                }
                <Text style={[styles.buttonTextStyle, textStyle]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}


const styles = {
    ContainerStyle:{
        position: 'absolute',
        bottom: verticalScale(20),
        alignSelf: 'center',
        flexDirection: 'row',
        width: scale(175),
        height: verticalScale(44),
        borderRadius: moderateScale(22),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B55A3',
        shadowColor: 'rgba(107,85,163,0.3)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
        shadowOpacity: 1
    },
    buttonTextStyle:{
        fontSize: moderateScale(14),
        color: '#fff',
        textAlign: 'center',
    },
    iconStyle:{
        width: scale(14),
        height: verticalScale(14),
        marginRight: scale(9),
        resizeMode: 'contain'
    }
}