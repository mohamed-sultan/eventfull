import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import strings from '../../strings'

export default ReloadButton = (props) => {
    return (
        <TouchableOpacity onPress={() => { props.onPress() }}
            style={{
                ...props.style,
                height: 40,
                width: 100,
                marginTop: 20,
                backgroundColor: '#FF0092',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4
            }}
        >
            <Text style={{ backgroundColor: 'transparent', color: '#ffffff', fontWeight: 'bold' }} >{strings.reload}</Text>
        </TouchableOpacity>
    )
}
