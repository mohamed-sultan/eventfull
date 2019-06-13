import React from 'react'
import { View, Image, TextInput, StyleSheet, TouchableOpacity, I18nManager } from 'react-native'
import { scale, verticalScale, moderateScale, width } from '../../Helpers';

export default AuthInput = (props) => {
    const { placeholder, style, error, value, onChangeText, secureTextEntry, keyboardType,returnKeyType, onSubmitEditing ,multiline} = props
    return(
        <View style={[ styles.inputContainerStyle, style ]} >
            <TextInput
                underlineColorAndroid={'transparent'}
                style={[ styles.inputStyle, error && { color:'red' } ]}
                placeholder={ placeholder }
                placeholderTextColor={ error?'red':'#000' }
                autoCorrect={false}
                keyboardType={keyboardType || undefined}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={ value }
                autoCapitalize='none'
                enablesReturnKeyAutomatically={true}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                multiline={multiline}
            />           
        </View>
    )
}


const styles = {
    inputContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: scale(286),
        height: verticalScale(43),
        borderRadius: verticalScale(22),
        borderColor: 'rgba(112,112,112,.1)',
        borderWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 3
        
    },
    inputIconStyle:{
        tintColor: 'rgba(102,102,102,.8)',
        marginLeft: scale(25),
        resizeMode: 'contain'
    },
    inputStyle:{
        fontSize: moderateScale(14),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        flex:1,
        paddingLeft: scale(26),
        paddingRight: scale(25),
        height: verticalScale(43),
        textAlignVertical: 'center',
        color: '#000'
    },
}