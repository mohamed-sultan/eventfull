import React from "react";
import { createStackNavigator, Back, Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import {
  Profile,
  EditProfile,
  ProfileContainer,
  PSpecialOffer,
  Favourite,
  PaymentInfo,
  AcceptRequest,
  AddPaymentCard
} from "../pages";
import ProfileTabs from "./ProfileTopTab";
import {
  stackNavigationOptions,
  tabBarVisabilyFunc,
  stackNavigationOptionsHomePage,
  stackNavigationOptionsWithBack,
  ImageHeaderWithBack,
  stackNavigationOptionsEvents,
  RecHeaderWithBack
} from "./NavHelpers";

import { HeaderButton } from "./HeaderComps";
import strings from "../strings";

const ProfileStack = createStackNavigator(
  {
    ProfileContainer: {
      screen: ProfileTabs,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: null,
        title: strings.profile
      })
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.editProfile
      })
    },
    AcceptRequest: {
      screen: AcceptRequest,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.AcceptRequest
      })
    },
    PaymentInfo: {
      screen: PaymentInfo,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.paymentInfo
      })
    },
    AddPaymentCard: {
      tabBarVisible: false,
      screen: AddPaymentCard,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.paymentInfo
      })
    }
  },
  {
    defaultNavigationOptions: stackNavigationOptionsWithBack
  }
);

//HomeStack.navigationOptions = tabBarVisabilyFunc

export default ProfileStack;
