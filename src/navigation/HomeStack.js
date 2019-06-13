import React from "react";
import { createStackNavigator, Back } from "react-navigation";
import {
  Home,
  OurServices,
  SpecialOffer,
  SelectServices,
  ProvidersList,
  ProviderProfile,
  SingleServicePage,
  EventsHomepage,
  EventDetails,
  EventsList,
  SearchPage,
  AlbumPage,
  SongPage,
} from "../pages";
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
import { verticalScale } from "../Helpers";

const HomeStack = createStackNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions: stackNavigationOptionsHomePage
    },
    OurServices: {
      screen: OurServices,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.services
      })
    },
    SpecialOffer: {
      screen: SpecialOffer,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.specialOffer
      })
    },
    SelectServices: {
      screen: SelectServices,
      navigationOptions: ({ navigation }) => {
        const img = navigation.state.params ? navigation.state.params.item ? navigation.state.params.item.img_url ? {uri: navigation.state.params.item.img_url} : require('../assets/images/hallowen.png') : require('../assets/images/hallowen.png') : require('../assets/images/hallowen.png')
        return {
        header: props => <ImageHeaderWithBack haveCenterImage  img={img} {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        )
      }}
    },
    ProvidersList: {
      screen: ProvidersList,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.providers
      })
    },
    ProviderProfile: {
      screen: ProviderProfile,
      navigationOptions: ({ navigation }) => ({
        header: props => <ImageHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        )
      })
    },
    SingleServicePage: {
      screen: SingleServicePage,
      navigationOptions: ({ navigation }) => ({
        header: props => <ImageHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        )
      })
    },
    EventsHomepage: {
      screen: EventsHomepage,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.events
      })
    },
    EventDetails: {
      screen: EventDetails,
      navigationOptions: ({ navigation }) => ({
        header: props => <ImageHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        )
      })
    },
    EventsList: {
      screen: EventsList,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack haveCenterImage {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: "Recently added"
      })
    },
    SearchPage:{
      screen: SearchPage,
      header: props => <RecHeaderWithBack {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
    },
    AlbumPage: {
      screen: AlbumPage,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: strings.albums
      })
    },
    SongPage:{
      screen: SongPage,
      navigationOptions: ({ navigation }) => ({
        header: props => <RecHeaderWithBack {...props} />,
        headerLeft: (
          <HeaderButton
            onPress={() => navigation.goBack()}
            iconStyle={{ tintColor: "#FFF" }}
            icon={require("../assets/icons/back/blueBack.png")}
          />
        ),
        title: 'Song'
      })
    }
  },
  {
    defaultNavigationOptions: stackNavigationOptionsWithBack
  }
);

//HomeStack.navigationOptions = tabBarVisabilyFunc

export default HomeStack;
