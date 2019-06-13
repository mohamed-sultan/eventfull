import React from 'react';
import { View, Text, StyleSheet, NetInfo } from 'react-native'
import { width, moderateScale, scale } from '../Helpers'
import strings from '../strings';


export default class AppNetInfo extends React.Component {

  state = { isConnected: true }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectionChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this._handleConnectionChange);
  }

  _handleConnectionChange = (isConnected) => {
    this.setState({
      isConnected
    });
  };

  render() {
    if (this.state.isConnected) return null
    return (
      <View style={styles.connectionStatus}>
        <Text style={styles.connectionText}>
          {strings.noInternetConnection}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  connectionStatus: {
    width: width,
    backgroundColor: '#f44336', //MARK: Default Color
    padding: scale(3),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
  },
  connectionText: {
    color: 'white',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  }
});
