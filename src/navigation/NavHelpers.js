import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableHighlight,
  Platform
} from "react-native";
import { HeaderButton } from "./HeaderComps";
import LinearGradient from "react-native-linear-gradient";
import { Header , Back} from "react-navigation";
import { scale, verticalScale, moderateScale, width } from "../Helpers";
import strings from "../strings";
import { getStatusBarHeight } from "react-native-status-bar-height";

const CustomHeader = props => {
  const colors = props.colors ? props.colors : ["#AF66A8", "#6B55A3"];
  return(
  <View>
    <LinearGradient
      colors={colors}
      style={{ height: getStatusBarHeight() }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    />
  </View>
)};

const CustomHeaderWithBack = props => {
  const colors = props.colors ? props.colors : ["#AF66A8", "#6B55A3"];
  return(
  <View style={{}}>
    <LinearGradient
      colors={colors}
      style={{ height: getStatusBarHeight() }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    />
    <Header {...props} />
  </View>
)};
const CustomProfileHeader = props => (
  <View>
    <LinearGradient
      colors={["#b0d247", "#2eb894"]}
      style={{ height: getStatusBarHeight() + 50 }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <Header {...props} style={{ backgroundColor: "transparent" }} />
    </LinearGradient>
  </View>
);

const AuthHeader = props => {
  return (
    <ImageBackground
      source={require('../assets/images/circelHeader.png')}
      style={{
        position: 'absolute', 
        top: 0, 
        right: 0, 
        left: 0,
        height: verticalScale(160),
        alignItems: "center",
        justifyContent: "center"
      }}
      resizeMode={"cover"}
    >
      <Text
        style={{
          fontSize: moderateScale(50),
          fontWeight: "600",
          color: "#fff",
          textAlign: "center"
        }}
      >
        {props.hedTitle}
      </Text>
      <Text
        style={{
          fontSize: moderateScale(14),
          color: "#fff",
          textAlign: "center"
        }}
      >
        {props.hedSubTitle}
      </Text>
    </ImageBackground>
  );
};

const ImageHeaderWithBack = (props) => {
    return(
    <ImageBackground source={require('../assets/images/circelHeader.png')} style={{ position: 'absolute', top: 0, right: 0, left: 0, height: verticalScale(160),justifyContent: 'flex-start',paddingVertical: Platform.OS =='ios' ? verticalScale(7) : verticalScale(15)}} resizeMode={'cover'}>
        <Header {...props}/>
        {
            props.haveCenterImage ?
            <View style={{position: 'absolute', top: verticalScale(92), width: scale(98), height: scale(98), borderRadius: scale(49), backgroundColor: '#fff', borderWidth: 1, borderColor: '#AF66A8', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                <Image source={props.img ? props.img : require('../assets/images/hallowen.png')} style={{width: scale(88), height: scale(88), borderRadius: scale(44), resizeMode:'cover'}}/>
            </View>: <View style={{width: 0, height: 0}}/>
        }
    </ImageBackground>)
}

const RecHeaderWithBack = (props) => {
  return(
  <ImageBackground source={require('../assets/images/recHeader.png')} style={{ position: 'absolute', top: 0, right: 0, left: 0,height: verticalScale(80),justifyContent: 'flex-start',paddingVertical: Platform.OS =='ios' ? verticalScale(7) : verticalScale(15) }} resizeMode={'cover'}>
      <Header {...props}/>
  </ImageBackground>)
}

const stackNavigationOptions = ({ navigation }) => {
  ({
    headerBackTitle: null,
    headerTintColor: "#FFFFFF",
    headerTransparent: true,
    gesturesEnabled: false,
    headerTitleStyle: {
      fontSize: moderateScale(36),
      color: "#FFFFFF",
      textAlign: "left"
    },
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomWidth: 0
      //elevation:0
    },
    header: props => <CustomHeader {...props} />,
    cardStyle: {
      //backgroundColor: COLORS.background
    }
  });
};
const AuthNavigationOptions = ({ navigation }) => ({
  headerBackTitle: null,
  headerTintColor: "#fff",
  headerTransparent: true,
  headerStyle: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    elevation: 0
  },
  headerLeft:  <HeaderButton
    onPress={() => navigation.goBack()}
    iconStyle={{ tintColor: "" }}
    //style={{ height: 20, marginTop: 45 }}
    icon={require("../assets/icons/back/BackProfile.png")}
  />,
});

const stackNavigationOptionsWithBack = ({ navigation }) => ({
    headerBackTitle: null,
    headerTransparent: true,
    headerTintColor: '#FFFFFF',
    gesturesEnabled: false,
    headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } ,
    
    header:(props) =><CustomHeaderWithBack  {...props} nav={navigation}/>,
    headerLeft:  <HeaderButton
    onPress={() => navigation.goBack()}
    iconStyle={{ tintColor: "" }}
    //style={{ height: 20, marginTop: 45 }}
    icon={require("../assets/icons/back/BackProfile.png")}
  />,
})
const stackNavigationOptionsProfilePage = ({ navigation }) => ({
  headerBackTitle: null,
  headerTransparent: true,
  //headerTintColor: '#FFFFFF',
  gesturesEnabled: false,
  headerStyle: {
    height: 50 - getStatusBarHeight(),
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    elevation: 0
  },
  header: props => <CustomProfileHeader {...props} nav={navigation} />,
  headerLeft: (
    <HeaderButton
      onPress={() => navigation.goBack()}
      iconStyle={{ tintColor: "" }}
      style={{ height: 20, marginTop: 45 }}
      icon={require("../assets/icons/back/BackProfile.png")}
    />
  )
});

const stackNavigationOptionsHomePage = ({ navigation }) => ({
  headerBackTitle: null,
  headerTransparent: true,
  headerLeft: (
    <HeaderButton
      onPress={() => navigation.goBack()}
      icon={require("../assets/icons/back/blueBack.png")}
    />
  ),
  gesturesEnabled: false,
  headerStyle: {
    height: 70,
    //backgroundColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0
  },
  header: props => <CustomHeader {...props} nav={navigation} />
});

const stackNavigationOptionsEvents = ({ navigation }) => ({
  headerBackTitle: null,
    headerTransparent: true,
    headerTintColor: '#FFFFFF',
    gesturesEnabled: false,
    headerStyle:{
        height: 50 - getStatusBarHeight(),
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        elevation:0
    },
    header: props => <CustomHeaderWithBack {...props} nav={navigation} colors={["#F7973D", "#E7128C"]} />,
    headerLeft:  <HeaderButton onPress={() => navigation.goBack()}  style={{height: 20}} icon={require('../assets/icons/back/eventBack.png')} />,
});

const topTabsNavigationOptions = {
  style: {
    height: verticalScale(94),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    margin: 20
  },
  labelStyle: {
    fontSize: moderateScale(36)
  },
  activeTintColor: "#C035E1",
  //showIcon: true,
  inactiveTintColor: "#9E9E9E",
  indicatorStyle: {
    height: 0
  }
};

const tabBarVisabilyFunc = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export {
  stackNavigationOptions,
  tabBarVisabilyFunc,
  topTabsNavigationOptions,
  stackNavigationOptionsHomePage,
  AuthNavigationOptions,
  AuthHeader,
  stackNavigationOptionsWithBack,
  stackNavigationOptionsProfilePage,
  ImageHeaderWithBack,
  stackNavigationOptionsEvents,
  RecHeaderWithBack
};
