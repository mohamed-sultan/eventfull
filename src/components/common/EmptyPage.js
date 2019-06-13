import React from 'react'
import {
    View, Image, Text, Dimensions
} from 'react-native'
import { Spinner, ReloadButton } from './index';
const { height } = Dimensions.get('window')
export default EmptyPage = (props) => {
    const { image, error, loading, text, onReload, empty, headText } = props
    return(
        <View style={ styles.container } >
            {
                loading?
                <Spinner />:
                error?
                <ReloadButton onPress={ () => onReload() } />:
                <View style={ styles.container } >
                    {
                        image &&
                        <Image source={ image } style={ styles.imageStyle } />
                    }
                    {
                        headText && 
                        <Text style={ styles.headText } >{ headText }</Text>
                    }
                    {
                        text &&
                        <Text style={ styles.textStyle } >{ text }</Text>
                    }
                </View>
            }
        </View>
    )
}

const styles = {
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    textStyle: {
        color: '#8F8F8F',
        fontSize: 14,
        textAlign: 'center',
        width: 150
    },
    headText: {
        color: '#3A2E2E',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        width: 150,
        marginBottom: 10
    }
}