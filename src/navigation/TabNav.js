import React from "react";
import { Image, View, I18nManager, Platform, Text } from "react-native";
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  Back
} from "react-navigation";
import { scale, moderateScale } from "../Helpers";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import { ProfileContainer } from "../pages";
import InvitationStack from './InvitationStack'
import SettingsStack from './SettingsStack'
import BasketStack  from './BasketStack'
import NotificationStack from './NotificationStack'
import TabBarIcon from "./TabBarIcon";
import strings from "../strings";
import { store } from "../store";

const tabBarOnPress = ({ navigation, defaultHandler }) => {
  let userObj = store.getState().user.userObj;
  if (!userObj) {
    navigation.navigate("AuthStack");
    return;
  } else {
    defaultHandler();
  }
};

const TabNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: strings.home,
        title: strings.home,
        tabBarIcon: ({ tintColor, focused }) => (
          <TabBarIcon
            tintColor={tintColor}
            tab={"home"}
            focused={focused}
            style={{ width: 19, height: 17 }}
            icon={require("../assets/icons/tabbar/home.png")}
          />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: strings.home,
        title: strings.home,
        tabBarIcon: ({ tintColor, focused }) => (
          <TabBarIcon
            tintColor={tintColor}
            tab={"profile"}
            focused={focused}
            style={{ width: 19, height: 17 }}
            icon={require("../assets/icons/tabbar/profile.png")}
          />
        )
      })
    },
    Notification: {
      screen: NotificationStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: strings.notifications,
        title: strings.notifications,
        tabBarIcon: ({ tintColor, focused }) => (
          <TabBarIcon
            tintColor={tintColor}
            tab={"notifications"}
            focused={focused}
            style={{ width: 19, height: 17 }}
            icon={require("../assets/icons/tabbar/notification.png")}
          />
        )
      })
    },
    Card: {
      screen: BasketStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: strings.basket,
        title: strings.basket,
        tabBarIcon: ({ tintColor, focused }) => (
          <TabBarIcon
            tintColor={tintColor}
            tab={"basket"}
            focused={focused}
            style={{ width: 19, height: 17 }}
            icon={require("../assets/icons/tabbar/cart.png")}
          />
        )
      })
    },
    Invitation: {
      screen: InvitationStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: strings.invitation,
        title: strings.invitation,
        activeTintColor: '#14ACE3',
        tabBarIcon: ({ tintColor, focused }) => (
          <TabBarIcon
            tintColor={tintColor}
            tab={"invitation"}
            focused={focused}
            style={{ width: 19, height: 17 }}
            icon={require("../assets/icons/tabbar/invitation.png")}
          />
        )
      })
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: strings.settings,
        title: strings.settings,
        tabBarIcon: ({ tintColor, focused }) => (
          <TabBarIcon
            tintColor={tintColor}
            tab={"settings"}
            focused={focused}
            style={{ width: 19, height: 17 }}
            icon={require("../assets/icons/tabbar/setting.png")}
          />
        )
      })
    }
  },
  {
    lazy: true,
    tabBarOptions: {
      optimizationsEnabled: false,
      activeTintColor: "#6B55A3",
      inactiveTintColor: "rgba(185,183,184,0.46)",
      style: {
        backgroundColor: "#fff",
        borderTopColor: "transparent",
        borderTopWidth: 0
      },
      showLabel: false
    }
  }
);

export default TabNav;
