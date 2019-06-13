import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform
} from "react-native";

import { createMaterialTopTabNavigator } from "react-navigation";
import { Profile, PSpecialOffer, Favourite } from "../pages";
import { scale, verticalScale, moderateScale, width } from "../Helpers";

export default (ProfileTabs = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Profile"
      })
    },
    SpecialOffer: {
      screen: PSpecialOffer,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "PSpecialOffer",
        tabBarIcon: (
          <ImageBackground
            source={require("../assets/icons/other/Notification.png")}
            style={{
              height: verticalScale(50),
              width: scale(50),
              resizeMode: "center",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#FFF" }}>0</Text>
          </ImageBackground>
        )
      })
    },
    Favourite: {
      screen: Favourite,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Favourite"
      })
    }
  },
  {
    lazy: true,
    tabBarOptions: {
      upperCaseLabel: false,
      showIcon: true,
      activeTintColor: "#FFF",
      inactiveTintColor: "#FFF",
      style: {
        backgroundColor: "#AA65A8",
        marginTop: verticalScale(80)
      },
      tabStyle: {
        flexDirection: "row-reverse",
        height: verticalScale(50)
      }
    }
  }
));
