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
import DatePicker from 'react-native-datepicker'
import strings from '../../strings'
export default InputDate = (props) => {

    const {
        ContentContainerStyle,
        TextInputStyle,
        IconStyle,
        placeholdetStyle
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
        type,
        min,
        max,
        placetextColor
    } = props
    return (
        <View style={[ContentContainerStyle, containerStyle, error&&{borderColor: 'red'}]} >
            <DatePicker
                style={[TextInputStyle, inputStyle]}
                date={value}
                mode={type || "date"}
                placeholder={placeholder}
                format={(type == 'time')?"HH:mm":"MM-DD-YYYY"}
                minDate={min}
                maxDate={max}
                is24Hour={true}
                confirmBtnText={strings.confirm}
                cancelBtnText={strings.cancel}
                showIcon={false}
                customStyles={{
                    dateInput: {
                        borderWidth: 0,
                        paddingTop: scale(30),
                        alignItems: 'flex-start',
                    },
                    placeholderText:{
                        fontSize: moderateScale(35.95),
                        textAlign: I18nManager.isRTL ? 'right' : 'left',
                        color: error ? 'red' : placetextColor ? placetextColor : '#6E6E6E',
                        
                    },
                    dateText:{
                        fontSize: moderateScale(35.95),
                        textAlign: I18nManager.isRTL ? 'right' : 'left',
                        color: error ? 'red' :placetextColor ? placetextColor : '#6E6E6E',
                    }
                }}
                onDateChange={(date) => {onChangeText(date)}}
            />
            <Image style={[IconStyle, iconStyle,  error && { tintColor:'red' }]} source={icon} resizeMode='contain'/>
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
        backgroundColor: '#fff'
    },
    TextInputStyle:{
        backgroundColor: '#FFFFFF',
        flex:1,
        height: verticalScale(110),
        borderColor: '#fff'
    },
    IconStyle:{
        width: scale(37),
        height: verticalScale(35),
        alignSelf: 'center',
    },
    placeholdetStyle:{
        fontSize: moderateScale(30),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        color: '#6E6E6E'
    }
}