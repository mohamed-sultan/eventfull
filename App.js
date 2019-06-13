import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  I18nManager,
  Alert,
  StatusBar
} from 'react-native';
import {RootStack, RootStackLogged } from './src/navigation'
import { MenuProvider } from 'react-native-popup-menu';
import {Provider} from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Spinner } from './src/components/common';
import AppNetInfo from './src/components/AppNetInfo'
import { Backend } from './src/services/Backend';
import NavigationService from './src/Helpers/NavigationService';
import KeyboardManager from 'react-native-keyboard-manager'


if(Platform.OS == 'ios'){
  KeyboardManager.setEnable(true);
}
StatusBar.setBarStyle('light-content', true);
console.disableYellowBox = true;
export default class App extends Component {

  constructor(properties) {
    super(properties);
    
  }
  
  componentWillUnmount() { 
  }
  componentDidMount(){
  }
  render() {
    return (
     
      <Provider store={store}>
        <PersistGate  persistor={persistor} loading={<Spinner fullScreen={'true'} />}>
          <MenuProvider>
            <StatusBar
              translucent
              backgroundColor="rgba(0, 0, 0, 0)"
              animated
            />
           <RootStack
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
           />
          </MenuProvider>
        </PersistGate>
      </Provider>
    )
  }
}
