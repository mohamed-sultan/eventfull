import React from 'react';
import { Image } from 'react-native';
import ActionButton from 'react-native-action-button';
import { scale, verticalScale } from '../../Helpers'

export default FAB = (props) => {
  const {onPress, actions} = props;

  return (
    <ActionButton
        {...props}
        buttonColor="#F92BA4"
        size={scale(110)}
        renderIcon={() => <Image style={styles.fab} source={require('../../assets/icons/plus.png')} />}
    >
      {
        (props.actions != undefined) &&props.actions.map((action, index) => {
          return(
            <ActionButton.Item key={index} buttonColor='#000000' title={action.title} onPress={action.onPress}>
              <Image source={action.icon} style={styles.actionButtonIcon} />
            </ActionButton.Item>
          )
        })
      }
    </ActionButton>
  )
}

const styles = {
    fab: {
        width: scale(44),
        resizeMode: 'contain'
  },
  actionButtonIcon:{
    width: scale(60),
    height: verticalScale(60),
    resizeMode: 'contain'
  }
}