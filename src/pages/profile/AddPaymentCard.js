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
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from "react-native-popup-menu";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {
  Container,
  Button,
  EmptyPage,
  SubmitButton
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

class AddPaymentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  renderNearSeparator() {
    return <View style={styles.nearSeparator} />;
  }

  render() {
    const {
      contentContainerStyle,
      TitleStyle,
      subTitle,
      InputSepratorStyle,
      dropdownTriggerContainerStyle,
      dropdownTextStyle,
      dropdownArrowStyle,
      optionsContainerStyle,
      optionTextStyle,
      expirationtTextStyle,
      inputContainerStyle,
      inputStyle
    } = styles;
    const { fromError } = this.props;
    return (
      <Container style={{ marginTop: verticalScale(80) }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{ flex: 1 }}
          contentContainerStyle={contentContainerStyle}
        >
          <View>
            <Text style={TitleStyle}>{strings.paymentInfo}</Text>
            <Text style={subTitle}>
              Enter your card info To complete the booking process{" "}
            </Text>
          </View>
          <AuthInput
            style={InputSepratorStyle}
            value={""}
            //error={''Error}
            onChangeText={value => console.log(value)}
            placeholder={strings.creditName}
          />
          <AuthInput
            style={InputSepratorStyle}
            value={""}
            //error={''Error}
            onChangeText={value => console.log(value)}
            placeholder={strings.CardNumber}
          />
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
                <Text style={[dropdownTextStyle]}>{strings.cardtype}</Text>
                <Image
                  source={require("../../assets/icons/other/downarrow.png")}
                  style={dropdownArrowStyle}
                />
              </View>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={optionsContainerStyle}>
              <MenuOption
                value={"visaCard"}
                customStyles={{ optionWrapper: { padding: 15 } }}
              >
                <Text style={optionTextStyle}>visaCard</Text>
              </MenuOption>
              <MenuOption
                value={"xxx"}
                customStyles={{ optionWrapper: { padding: 15 } }}
              >
                <Text style={optionTextStyle}>xxx</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
          <Text style={expirationtTextStyle}>{strings.expirationDate}</Text>
          <View style={[inputContainerStyle]}>
            <TextInput
              underlineColorAndroid={"transparent"}
              style={[inputStyle, fromError && { color: "red" }]}
              placeholder={strings.month}
              placeholderTextColor={fromError ? "red" : "#000"}
              autoCorrect={false}
              keyboardType={"number-pad"}
              onChangeText={value => console.log(value)}
              value={""}
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
              placeholder={strings.Year}
              placeholderTextColor={fromError ? "red" : "#000"}
              autoCorrect={false}
              keyboardType={"number-pad"}
              onChangeText={value => console.log(value)}
              value={""}
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
            placeholder={"CVV"}
          />
        </ScrollView>
        <SubmitButton
          buttonText={strings.add}
          onPress={() => console.log("sss")}
          containerStyle={{ bottom: verticalScale(30) }}
          gradientColor={["#b0d247", "#2eb894"]}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "flex-start",
    flexGrow: 1
  },
  TitleStyle: {
    fontSize: moderateScale(35),
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    marginLeft: scale(28),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(2)
  },
  subTitle: {
    fontSize: moderateScale(14),
    marginHorizontal: scale(30),
    marginBottom: verticalScale(23)
  },
  InputSepratorStyle: {
    marginTop: verticalScale(20),
    marginLeft: scale(21)
  },
  dropdownTriggerContainerStyle: {
    paddingHorizontal: scale(26),
    flexDirection: "row",
    justifyContent: "space-between",
    width: scale(286),
    height: verticalScale(43),
    marginTop: verticalScale(20),
    marginLeft: scale(21),
    borderRadius: verticalScale(22),
    borderColor: "rgba(112,112,112,.1)",
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 3
  },
  dropdownTextStyle: {
    textAlign: "left",
    fontSize: moderateScale(14)
  },
  dropdownArrowStyle: {
    height: verticalScale(14.5),
    width: scale(9),
    resizeMode: "contain"
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
  expirationtTextStyle: {
    marginTop: verticalScale(20),
    color: "#000",
    fontSize: moderateScale(14),
    textAlign: "left",
    marginLeft: scale(45)
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
  inputContainerStyle: {
    marginTop: verticalScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    width: scale(286),
    height: verticalScale(43),
    marginLeft: scale(20),
    borderRadius: verticalScale(22),
    borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderColor: "rgba(112,112,112,.1)",
    elevation: 3
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(AddPaymentCard);
