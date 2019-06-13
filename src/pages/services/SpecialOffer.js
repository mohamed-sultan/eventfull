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
} from "../../Helpers";
import strings from "../../strings";
import {} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from "react-native-popup-menu";

class SpecialOffer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
      fromError,
      
    } = this.props
    const {
      welcomeContainerStyle,
      welcomeTextStyle,
      homeMsgStyle,
      headerContainerStyle,
      InputSepratorStyle,
      dropdownTriggerContainerStyle,
      dropdownTextStyle,
      dropdownArrowStyle,
      optionsContainerStyle,
      optionTextStyle,
      dropdownSeparator,
      inputContainerStyle,
      inputStyle,
      budgetTextStyle,
      contentContainerStyle
    } = styles;
    return (
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{ flex: 1 }}
          contentContainerStyle={contentContainerStyle}
        >
          <View style={headerContainerStyle}>
            <Text style={homeMsgStyle}>{strings.selectYourOffer}</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Menu
              renderer={renderers.Popover}
              onSelect={value => console.log(value)}
              rendererProps={{
                anchorStyle: { opacity: 0, height: 0 },
                preferredPlacement: "bottom"
              }}
            >
              <MenuTrigger>
                <View style={[dropdownTriggerContainerStyle]}>
                  <Text style={[dropdownTextStyle]}>{strings.approtType}</Text>
                  <Image
                    source={require("../../assets/icons/other/downarrow.png")}
                    style={dropdownArrowStyle}
                  />
                </View>
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={optionsContainerStyle}>
                <MenuOption
                  value={"bla bla"}
                  customStyles={{ optionWrapper: { padding: 15 } }}
                >
                  <Text style={optionTextStyle}>bla bla</Text>
                </MenuOption>
                <MenuOption
                  value={"sss"}
                  customStyles={{ optionWrapper: { padding: 15 } }}
                >
                  <Text style={optionTextStyle}>sss</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
            <Text style={budgetTextStyle}>{strings.budget}</Text>
            <View style={[inputContainerStyle]}>
              <TextInput
                underlineColorAndroid={"transparent"}
                style={[inputStyle, fromError && { color: "red" }]}
                placeholder={strings.fromRs}
                placeholderTextColor={fromError ? "red" : "#000"}
                autoCorrect={false}
                keyboardType={"number-pad"}
                onChangeText={value => console.log(value)}
                value={"1000"}
                autoCapitalize="none"
                enablesReturnKeyAutomatically={true}
                //onSubmitEditing={onSubmitEditing}
                //returnKeyType={returnKeyType}
              />
              <TextInput
                underlineColorAndroid={"transparent"}
                style={[
                  inputStyle,
                  fromError && { color: "red" },
                  { borderRightWidth: 0 }
                ]}
                placeholder={strings.toRs}
                placeholderTextColor={fromError ? "red" : "#000"}
                autoCorrect={false}
                keyboardType={"number-pad"}
                onChangeText={value => console.log(value)}
                value={"50000"}
                autoCapitalize="none"
                enablesReturnKeyAutomatically={true}
                //onSubmitEditing={onSubmitEditing}
                //returnKeyType={returnKeyType}
              />
            </View>
            <AuthInput
              style={InputSepratorStyle}
              value={""}
              //error={''Error}
              onChangeText={value => console.log(value)}
              placeholder={strings.address}
            />
            <AuthInput
              style={InputSepratorStyle}
              value={""}
              //error={''Error}
              onChangeText={value => console.log(value)}
              placeholder={strings.notes}
              // multiline
            />
          </View>
          <SubmitButton
            buttonText={strings.submit}
            onPress={() => console.log("sss")}
            containerStyle={{ bottom: verticalScale(30) }}
          />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "flex-start",
    flexGrow: 1
  },
  separator: {
    height: verticalScale(15)
  },
  headerContainerStyle: {
    marginTop: verticalScale(100),
    alignSelf: "flex-start",
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(20)
  },
  welcomeContainerStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  welcomeTextStyle: {
    fontSize: moderateScale(35),
    fontWeight: "600",
    color: "#000",
    textAlign: "left"
  },
  usernameTextStyle: {
    fontSize: moderateScale(25),
    color: "#5C5C5C",
    textAlign: "right",
    marginLeft: scale(10),
    marginTop: verticalScale(3)
  },
  homeMsgStyle: {
    fontSize: moderateScale(12),
    color: "#B9B7B8",
    textAlign: "left",
    marginBottom: verticalScale(15)
  },
  InputSepratorStyle: {
    marginTop: verticalScale(20)
  },
  dropdownTriggerContainerStyle: {
    paddingHorizontal: scale(26),
    flexDirection: "row",
    justifyContent: "space-between",
    width: scale(286),
    height: verticalScale(43),
    borderRadius: verticalScale(22),
    borderColor: "rgba(112,112,112,.1)",
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  optionsContainerStyle: {
    width: scale(286),
    backgroundColor: "#fff"
  },
  optionTextStyle: {
    color: "#000",
    fontSize: moderateScale(14),
    textAlign: "left"
  },
  dropdownSeparator: {
    height: 1,
    backgroundColor: "#707070",
    opacity: 0.47
  },
  dropdownArrowStyle: {
    height: verticalScale(14.5),
    width: scale(9),
    resizeMode: "contain"
  },
  dropdownTextStyle: {
    textAlign: "left",
    fontSize: moderateScale(14)
  },
  inputContainerStyle: {
    marginTop: verticalScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    width: scale(286),
    height: verticalScale(43),
    borderRadius: verticalScale(22),
    borderColor: "rgba(112,112,112,.1)",
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  inputStyle: {
    fontSize: moderateScale(14),
    textAlign: "center",
    flex: 1,
    paddingLeft: scale(26),
    paddingRight: scale(25),
    height: verticalScale(43),
    width: scale(142),
    textAlignVertical: "center",
    color: "#000",
    borderRightWidth: scale(1),
    borderColor: "rgba(112,112,112,.1)"
  },
  budgetTextStyle: {
    marginTop: verticalScale(20),
    color: "#000",
    fontSize: moderateScale(14),
    textAlign: "left",
    marginLeft: scale(20)
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(SpecialOffer);
