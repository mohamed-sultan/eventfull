import { I18nManager, Platform } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import DrawerStack from './DrawerStack'
import AuthStack from './AuthStack'
import TabNav from './TabNav'

export const RootStack = createAppContainer(createSwitchNavigator({
    AuthStack: {
        screen: AuthStack,
        navigationOptions: {
        }
    },
    TabNav: {
        screen: TabNav,
        navigationOptions: {
        }
    }
}))
