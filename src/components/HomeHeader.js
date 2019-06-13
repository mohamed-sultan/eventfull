import React from 'react'
import { View, Image, TextInput, StyleSheet, TouchableOpacity,I18nManager, SafeAreaView, Platform, Dimensions } from 'react-native'
import { scale, verticalScale, moderateScale, width } from '../Helpers';
import strings from '../strings'
import { Header } from 'react-navigation'


 const isIphoneX = () => {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}

export default HomeHeaderComponent = (props) => {
    const { navigate, changeProp } = props
    const {
        ContainerStyle,
        InputStyle,
        TextInputStyle,
        SearchIconStyle
    } = styles
    return(
        <View style={ContainerStyle}>
            <TextInput 
                style={TextInputStyle}
                //value={Searchkeyword}
                onChangeText={(value) => changeProp(value)}
                placeholder={strings.searchHome}
                placeholderTextColor={'#FF3FAC'}
                autoCapitalize='none'
                autoCorrect={false}
                underlineColorAndroid={'transparent'}
                returnKeyType={'search'}
                onSubmitEditing={() => navigate()}
            />
            <TouchableOpacity onPress={() => navigate()}>
                <Image 
                    style={SearchIconStyle}
                    source={require('../assets/icons/searchIcon.png')}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        </View>

    )
}


const styles = {
    ContainerStyle:{
        backgroundColor:'#fff', 
        flexDirection:'row', 
        paddingHorizontal: scale(26),
        alignItems:'center', 
        borderRadius: verticalScale(65 / 2), 
        alignSelf: 'center', 
        width: scale(468), 
        height: verticalScale(65), 
        position: 'absolute', 
        top:isIphoneX() ?verticalScale(90) : Platform.OS === 'ios' ? 35 : verticalScale(35),
    },
    TextInputStyle:{
        backgroundColor: '#FFFFFF',
        fontSize: moderateScale(30),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        flex:1,
        color: '#FF3FAC',
        height: verticalScale(65),
        borderRadius: verticalScale(65 / 2)
    },
    SearchIconStyle:{
        width: scale(33.04),
        height: verticalScale(33.16),
        marginLeft: scale(10),
        tintColor: '#00B8EC'
    },
}