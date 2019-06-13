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
  TouchableHighlight,
  Alert
} from "react-native";
import {
  Container,
  Button,
  EmptyPage,
  SubmitButton,
  AuthInput
} from "../../components/common";
import {
  verticalScale,
  scale,
  width,
  height,
  moderateScale
} from "../..//Helpers";
import strings from "../../strings";
import {} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  renderNearSeparator() {
    return <View style={styles.nearSeparator} />;
  }
  _onPress() {
    Alert.alert(
      "Are you sure?",
      "back to profile will cancel your Edit",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  render() {
    console.log(this.props);
    const {
      contentContainerStyle,
      ImageStyle,
      formStyle,
      textChampStyle,
      textValueStyle,
      inputStyle,
      buttonStyle,
      iconStyle
    } = styles;
    const { fromError } = this.props;
    return (
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
        <View style={formStyle}>
          <View>
            <Text style={textChampStyle}>{strings.yourName}</Text>
            <TextInput
              underlineColorAndroid={"rgba(112,112,112,.1)"}
              style={[inputStyle, fromError && { color: "red" }]}
              placeholderTextColor={fromError ? "red" : "#000"}
              autoCorrect={false}
              keyboardType={"default"}
              onChangeText={value => console.log(value)}
              value={"Nasser Hammad"}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
            />
          </View>
          <View>
            <Text style={textChampStyle}>{strings.email}</Text>
            <TextInput
              underlineColorAndroid={"rgba(112,112,112,.1)"}
              style={[inputStyle, fromError && { color: "red" }]}
              placeholderTextColor={fromError ? "red" : "#000"}
              autoCorrect={false}
              keyboardType={"email-address"}
              onChangeText={value => console.log(value)}
              value={"NasserHammad@..."}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
            />
          </View>
          <View>
            <Text style={textChampStyle}>{strings.phoneNumber}</Text>
            <TextInput
              underlineColorAndroid={"rgba(112,112,112,.1)"}
              style={[inputStyle, fromError && { color: "red" }]}
              placeholderTextColor={fromError ? "red" : "#000"}
              autoCorrect={false}
              keyboardType={"name-phone-pad"}
              onChangeText={value => console.log(value)}
              value={"123123123"}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
            />
          </View>
          <View>
            <Text style={textChampStyle}>{strings.city}</Text>
            <TextInput
              underlineColorAndroid={"rgba(112,112,112,.1)"}
              style={[inputStyle, fromError && { color: "red" }]}
              placeholderTextColor={fromError ? "red" : "#000"}
              autoCorrect={false}
              keyboardType={"default"}
              onChangeText={value => console.log(value)}
              value={"Dammam"}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
            />
          </View>
        </View>
        <TouchableOpacity
          style={buttonStyle}
          onPress={this._onPress}
          elevation={5}
        >
          <Image
            source={require("../../assets/icons/other/Checkbox.png")}
            style={iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "flex-start",
    flexGrow: 1,
    marginTop: verticalScale(80)
  },
  ImageStyle: {
    width: scale(74),
    height: verticalScale(74),
    borderRadius: 100,
    marginVertical: verticalScale(22),
    marginHorizontal: scale(36),
    alignSelf: I18nManager.isRTL ? "flex-end" : "flex-start"
  },
  formStyle: {
    width: width - 20,
    marginTop: verticalScale(5),
    marginHorizontal: scale(35)
  },
  textChampStyle: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: "#b8b8b8"
  },
  textValueStyle: {
    fontSize: moderateScale(20),
    color: "#000",
    marginRight: scale(30)
  },
  inputStyle: {
    fontSize: moderateScale(14),
    textAlign: "left",
    flex: 1,
    height: verticalScale(43),
    width: width - 20,
    textAlignVertical: "center",
    color: "#000",
    borderColor: "rgba(112,112,112,.1)"
    //marginRight: scale(10)
  },
  iconStyle: {
    width: scale(22),
    height: verticalScale(15),
    resizeMode: "contain",
    tintColor: "#FFF"
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B55A3",
    borderRadius: 100,
    width: scale(59),
    height: verticalScale(59),
    alignSelf: "flex-end",
    marginTop: verticalScale(40),
    marginRight: scale(38),
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1 //IOS
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(EditProfile);
