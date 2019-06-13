import React from 'react'
import { View, Image, TextInput, StyleSheet, TouchableOpacity, I18nManager } from 'react-native'
import { scale, verticalScale, moderateScale, width } from '../../Helpers';
import DatePicker from 'react-native-datepicker'
import strings from '../../strings'

export default AuthDateInput = (props) => {
    const { placeholder, style, error, value, onChangeText, secureTextEntry, keyboardType, icon, iconStyle, returnKeyType, onSubmitEditing, min, max } = props
    return(
        <View style={[ styles.inputContainerStyle, style ]} >
            <DatePicker
                style={[styles.inputStyle]}
                date={value}
                mode={"date"}
                placeholder={placeholder}
                format={"MM-DD-YYYY"}
                minDate={min}
                maxDate={max}
                is24Hour={true}
                confirmBtnText={strings.confirm}
                cancelBtnText={strings.cancel}
                showIcon={false}
                customStyles={{
                    dateInput: {
                        borderWidth: 0,
                        paddingTop: scale(10),
                        alignItems: 'flex-start',
                    },
                    placeholderText:{
                        fontSize: moderateScale(14),
                        textAlign: I18nManager.isRTL ? 'right' : 'left',
                        color: error ? 'red' :'#000',
                        
                    },
                    dateText:{
                        fontSize: moderateScale(14),
                        textAlign: I18nManager.isRTL ? 'right' : 'left',
                        color: error ? 'red' :'#000',
                    }
                }}
                onDateChange={(date) => {onChangeText(date)}}
            />
            <Image style={[ styles.inputIconStyle, error && { tintColor:'red' }, iconStyle ]} source={require("../../assets/icons/other/downarrow.png")} />
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
        tintColor: '#000',
        marginRight: scale(10),
        resizeMode: 'contain'
    },
    inputStyle:{
        flex:1,
        paddingLeft: scale(26),
        paddingRight: scale(25),
        height: verticalScale(43),
    },
}