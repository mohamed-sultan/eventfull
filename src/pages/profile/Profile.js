import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  I18nManager,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableHighlight
} from "react-native";
import { Container, Button, EmptyPage } from "../../components/common";
import {
  verticalScale,
  scale,
  width,
  height,
  moderateScale
} from "../../Helpers";
import strings from "../../strings";
import { store } from "../../store";

import {} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    // onPress={() => this.props.route.navigation.navigate("EditProfile")}
  }

  componentDidMount() {
    
  }
  navigate = () => {
    this.props.navigation.navigate("EditProfile");
  };
  navigateToPayment = () => {
    this.props.navigation.navigate("PaymentInfo");
  };
  renderNearSeparator() {
    return <View style={styles.nearSeparator} />;
  }

  render() {
    const {
      userObj
    } = this.props
    const {
      contentContainerStyle,
      ImageStyle,
      personalDataStyle,
      infoHeaderStyle,
      editStyle,
      textChampStyle,
      textValueStyle,
      formHolder,
      deviderStyle,
      changePasswordStyle,
      iconStyle
    } = styles;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{ flex: 1 }}
          contentContainerStyle={contentContainerStyle}
        >
          <Image
            resizeMode="cover"
            style={ImageStyle}
            source={{
              uri:
                "http://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
            }}
          />
          <View style={infoHeaderStyle}>
            <Text style={personalDataStyle}>{strings.PersonalData}</Text>
            <TouchableOpacity onPress={() => this.navigate()}>
              <Text style={editStyle}>{strings.edit}</Text>
            </TouchableOpacity>
          </View>
          <View style={formHolder}>
            <View style={infoHeaderStyle}>
              <Text style={textChampStyle}>{strings.yourName}</Text>
              <Text style={textValueStyle}>{userObj.first_name} {userObj.last_name}</Text>
            </View>
            <View style={infoHeaderStyle}>
              <Text style={textChampStyle}>{strings.email}</Text>
              <Text style={textValueStyle}>{userObj.email}</Text>
            </View>
            <View style={infoHeaderStyle}>
              <Text style={textChampStyle}>{strings.phoneNumber}</Text>
              <Text style={textValueStyle}>{userObj.mobile}</Text>
            </View>
            <View style={infoHeaderStyle}>
              <Text style={textChampStyle}>{strings.city}</Text>
              <Text style={textValueStyle}>Dammam</Text>
            </View>
          </View>
          <View style={deviderStyle} />
          <TouchableOpacity style={changePasswordStyle}>
            <Image
              source={require("../../assets/icons/other/lock.png")}
              style={iconStyle}
              resizeMode="contain"
            />
            <Text style={personalDataStyle}>{strings.ChangePassword}</Text>
            <Image
              source={require("../../assets/icons/other/Group.png")}
              style={iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={deviderStyle} />
          <TouchableOpacity
            style={changePasswordStyle}
            onPress={() => this.navigateToPayment()}
          >
            <Image
              source={require("../../assets/icons/other/credit-card.png")}
              style={iconStyle}
              resizeMode="contain"
            />
            <Text style={personalDataStyle}>{strings.paymentInfo}</Text>
            <Image
              source={require("../../assets/icons/other/Group.png")}
              style={iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "flex-start",
    flexGrow: 1
  },
  ImageStyle: {
    width: scale(74),
    height: verticalScale(74),
    borderRadius: 100,
    marginVertical: verticalScale(25),
    marginHorizontal: scale(42),
    alignSelf: I18nManager.isRTL ? "flex-end" : "flex-start"
  },
  infoHeaderStyle: {
    width: width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(25),
    marginVertical: scale(7)
  },
  personalDataStyle: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#000"
  },
  formHolder: {
    marginTop: verticalScale(5)
  },
  editStyle: {
    fontSize: moderateScale(14),
    color: "#57c5aa",
    textDecorationLine: "underline",
    marginRight: scale(30)
  },
  textChampStyle: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: "#b8b8b8"
  },
  textValueStyle: {
    fontSize: moderateScale(14),
    color: "#000",
    marginRight: scale(37)
  },
  deviderStyle: {
    borderBottomWidth: 1,
    opacity: 0.5,
    width: width - scale(50),
    marginTop: verticalScale(5),
    alignSelf: "center"
  },
  changePasswordStyle: {
    flexDirection: "row",
    width: width - scale(50),
    alignSelf: "center",
    alignItems: "center",
    height: verticalScale(40),
    marginTop: verticalScale(5),
    justifyContent: "space-between"
  },
  iconStyle: {
    width: 13,
    height: 17,
    resizeMode: "contain",
    tintColor: "black"
  }
});

const mapStateToProps = ({user}) => {
  const {
    userObj
  } = user
  return {
    userObj
  };
};

export default connect(
  mapStateToProps,
  {}
)(Profile);
