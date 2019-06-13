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
import {} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  renderNearSeparator() {
    return <View style={styles.nearSeparator} />;
  }
  navigateToPayment = () => {
    this.props.navigation.navigate("AddPaymentCard");
  };
  render() {
    const {
      contentContainerStyle,
      paymentStyle,
      containerStyle,
      cardStyle,
      buttonStyle,
      iconStyle,
      cardImageStyle,
      cardTextChanpStyle,
      cardTextvalueStyle,
      textholderStyle,
      menuStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{ flex: 1 }}
          contentContainerStyle={contentContainerStyle}
        >
          <View style={cardStyle} elevation={3}>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlR8Qk-Go3CvQn-FmJUERcGBnHej9YkUO-j1jjdrSedPrOlVI"
              }}
              style={cardImageStyle}
              resizeMode="cover"
            />
            <View>
              <View style={textholderStyle}>
                <Text style={cardTextChanpStyle}>{strings.creditName}</Text>
                <Text style={cardTextvalueStyle}>Nasser tammemi</Text>
              </View>
              <View style={textholderStyle}>
                <Text style={cardTextChanpStyle}>{strings.CardNumber}</Text>
                <Text style={cardTextvalueStyle}>***********282 </Text>
              </View>
            </View>
            <Image
              source={require("../../assets/icons/other/menu.png")}
              style={menuStyle}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => this.navigateToPayment()}
            elevation={5}
          >
            <Image
              source={require("../../assets/icons/other/plus.png")}
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
  containerStyle: {
    flex: 1,
    backgroundColor: "#F7F8F8",
    marginTop: verticalScale(100)
  },
  contentContainerStyle: {
    alignItems: "flex-start",
    flexGrow: 1,
    backgroundColor: "#F7F8F8"
  },
  paymentStyle: {
    fontSize: moderateScale(18),
    marginVertical: verticalScale(26),
    marginHorizontal: scale(30),
    fontWeight: "bold",
    color: "#000"
  },
  cardStyle: {
    height: verticalScale(75),
    width: width - 30,
    backgroundColor: "#FFF",
    marginHorizontal: scale(14),
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B55A3",
    borderRadius: 100,
    width: scale(59),
    height: verticalScale(59),
    position: "absolute",
    bottom: verticalScale(50),
    right: scale(16),
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1 //IOS
  },
  iconStyle: {
    width: scale(22),
    height: verticalScale(15),
    tintColor: "#FFF"
  },
  cardImageStyle: {
    width: scale(44),
    height: verticalScale(44),
    borderRadius: 100,
    resizeMode: "contain",
    marginLeft: scale(12),
    marginRight: scale(18)
  },
  cardTextChanpStyle: {
    fontSize: moderateScale(14),
    color: "#000"
  },
  cardTextvalueStyle: {
    fontSize: moderateScale(14),
    color: "#B9B7B8",
    paddingLeft: scale(8)
  },
  textholderStyle: {
    marginTop: verticalScale(5),
    flexDirection: "row"
  },
  menuStyle: {
    width: scale(6),
    height: verticalScale(15),
    position: "absolute",
    right: scale(18.5)
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(PaymentInfo);
