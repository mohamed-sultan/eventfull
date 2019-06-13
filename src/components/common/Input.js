import React from 'react';
import {
    ImageBackground,
    Text,
    Image,
    SafeAreaView,
    View,
    TextInput,
    I18nManager
} from 'react-native';
import { width, verticalScale, scale, moderateScale } from '../../Helpers'

export default Input = (props) => {

    const {
        ContentContainerStyle,
        TextInputStyle,
        IconStyle
    } = styles
    const {
        placeholder,
        icon,
        onChangeText,
        value,
        containerStyle,
        inputStyle,
        secureTextEntry, 
        keyboardType,
        iconStyle,
        error,
        multiline,
        refFun,
        onSubmitEditing,
        returnKeyType
    } = props
    return (
        <View style={[ContentContainerStyle, containerStyle, error && { borderColor:'red' } ]} >
            <TextInput 
                style={[TextInputStyle, inputStyle,  error && { color:'red' }]}
                value={value}
                onChangeText={(value) => onChangeText(value)}
                placeholder={placeholder}
                placeholderTextColor={error?'red':'#6E6E6E'}
                autoCapitalize='none'
                multiline={multiline}
                autoCorrect={false}
                underlineColorAndroid={'transparent'}
                enablesReturnKeyAutomatically={true}
                keyboardType={keyboardType || undefined}
                secureTextEntry={secureTextEntry}
                ref={refFun}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
            />
            {
                icon &&
                <Image style={[IconStyle, iconStyle,  error && { tintColor:'red' }]} source={icon} resizeMode='contain'/>
            }
        </View>
    );
}

const styles = {
    ContentContainerStyle: {
        flexDirection: 'row',
        paddingHorizontal: scale(25),
        justifyContent: 'space-between',
        width: scale(634),
        height: verticalScale(116),
        borderRadius: 5,
        borderColor: '#9C9C9C',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    TextInputStyle:{
        backgroundColor: '#FFFFFF',
        fontSize: moderateScale(30),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        flex:1,
        color: '#6E6E6E'
    },
    IconStyle:{
        width: scale(37),
        height: verticalScale(35),
        alignSelf: 'center',
        tintColor: '#959595'
    }
}