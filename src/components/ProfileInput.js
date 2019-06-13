import React from 'react'
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { scale, verticalScale, moderateScale, width } from '../Helpers';

export default ProfileInput = (props) => {
    const { placeholder, style, error, value, onChangeText, secureTextEntry, keyboardType, icon, iconStyle, transparent } = props
    return(
        <View style={[ styles.inputContainer, style ]} >
            <Image style={[ styles.inputIconStyle, error && { tintColor:'red' }, iconStyle ]} source={ icon } />
            <TextInput
                underlineColorAndroid={'transparent'}
                style={[ styles.inputStyle, error && { color:'red' } ]}
                placeholder={ placeholder }
                placeholderTextColor={ error?'red':'#646464' }
                autoCorrect={false}
                keyboardType={keyboardType || undefined}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={ value }
            />
        </View>
    )
}


const styles = {
    inputContainer: {
        width: scale(344),
        height: verticalScale(48),
        borderWidth: .7,
        borderColor: '#E0E0E0',
        flexDirection: 'row-reverse',
        paddingLeft: scale(25),
        alignItems: 'center',
        marginBottom: verticalScale(15),
    },
    inputStyle: {
        color: '#646464',
        fontSize: moderateScale(10),
        flex:1,
        paddingHorizontal: scale(10),
        height: verticalScale(48),
        textAlign: 'right'
    },
    inputIconStyle:{
        resizeMode: 'contain',
        tintColor: '#646464'
    }
}