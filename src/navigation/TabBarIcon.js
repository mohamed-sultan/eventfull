import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
 } from 'react-native'
 import { COLORS } from '../constants'
import { verticalScale, scale } from '../Helpers';


 const TabBarIcon = (props) => {
    const { tintColor, tab, icon, style, focused } = props
    const {
        iconStyle,
        notifContainer,
        notifText,
        searchContainerStyle,
    } = styles
    if(focused){
        return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{marginTop: -verticalScale(50),zIndex: 999,height: scale(62) , width: scale(62), borderRadius: scale(31), backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>  
                <View style={{height: scale(50) ,  width: scale(50), borderRadius: scale(25), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: 'rgba(185,183,184,0.46)',shadowOffset: {width: 0, height: 0},shadowRadius: 20,shadowOpacity: 20}}>
                    <Image source={tab != 'invitation' ? icon : require('../assets/icons/tabbar/invitationActive.png')} style={[style, iconStyle,tab != 'invitation' && {tintColor}]} />
                </View>
            </View>
            <View style={{
                position: 'absolute',
                bottom: -verticalScale(6),
                width: scale(66),
                height: scale(33),
                borderBottomLeftRadius: scale(33),
                borderBottomRightRadius: scale(33),
                backgroundColor: '#F7F8F8',
                //alignSelf: 'flex-end'
            }}/>
        </View>
        )
    }
    return (
        <View>
            {
                (false) &&
                <View style={notifContainer} >
                    <Text style={notifText} >3</Text>
                </View>
            }
            <Image source={icon} style={[style, iconStyle, tab != 'invitation' && {tintColor} ]} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        resizeMode: 'contain'
    },
    notifContainer: {
        backgroundColor: '#C22F71',
        width:13,
        height: 13,
        borderRadius: 7.5,
        justifyContent: 'center',
        alignItems: 'center',
        right: -5,
        top:-5,
        position: 'absolute',
        zIndex:90
    },
    notifText: {
        fontSize: 7,
        color: '#fff'
    },
    searchContainerStyle:{
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00C0ED',
        elevation:1,
        shadowColor: '#5ED8FE',
        shadowOffset: {width:0, height: 13},
        shadowOpacity: .6,
        shadowRadius: 29,
    }
})


export default TabBarIcon