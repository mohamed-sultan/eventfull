import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import { COLORS } from '../../constants'

export default Spinner = ({ size, style, color, fullScreen, overlay }) => {
  if(overlay){
    return(
    <Modal transparent={true} >
      <View style={styles.overlayStyle}>
        <ActivityIndicator color={color || '#FF0092'} size={size || 'large'} />
      </View>
    </Modal>
    )
  }
  return (
    <View style={[styles.spinnerStyle, style, fullScreen && { flex: 1 }]}>
      <ActivityIndicator color={color || '#FF0092'} size={size || 'large'} />
    </View>
  )
}

const styles = {
  spinnerStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  overlayStyle:{
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}