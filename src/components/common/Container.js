import React from 'react';
import { View, SafeAreaView,StatusBar } from 'react-native';
import AppNetInfo from '../AppNetInfo'
import { width } from '../../Helpers'

export default Container = (props) => {
    return (
        <View style={[{ flex: 1,backgroundColor: '#F7F8F8', alignItems: 'center'}, props.style]} >
            <SafeAreaView style={{flex:1, width, alignItems: 'center'}} >
                <AppNetInfo />
                {props.children}
            </SafeAreaView>
        </View>
    )
}