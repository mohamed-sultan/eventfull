import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { width, verticalScale, scale, moderateScale } from '../../Helpers'

export default Button = (props) => {

    const { text, onPress, fullWidth, style} = props
    const {
        containerStyle,
        textStyle
    } = styles
    return (
        <TouchableOpacity onPress={onPress}
            style={[containerStyle, fullWidth && {width}, style]}
        >
            <Text style={textStyle} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    containerStyle: {
        height: verticalScale(40),
        width: scale(308),
        backgroundColor: '#C22F71',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: moderateScale(11)
    }
}