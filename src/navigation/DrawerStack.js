import { I18nManager, Platform } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import TabNav from './TabNav'
import { scale, moderateScale } from '../Helpers';
import DrawerContent from '../components/DrawerContent'
import strings from '../strings';



export default DrawerStack = createDrawerNavigator({
    Home: {
        screen: TabNav,
        navigationOptions: {
            drawerLabel: strings.home,
            
        }
    }
    
}, {
    drawerPosition: (I18nManager.isRTL)? 'right':'left',
    contentComponent: DrawerContent,
    contentOptions: {
        inactiveBackgroundColor: '#FFFFFF',
        activeBackgroundColor: '#FFFFFF',
        activeTintColor: '#FF3AC5',
        inactiveTintColor: '#202020',
    },
})
