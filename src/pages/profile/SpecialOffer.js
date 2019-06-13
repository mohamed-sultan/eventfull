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
} from "../..//Helpers";
import strings from "../../strings";
import {} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import StarRating from "react-native-star-rating";

class PSpecialOffer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  renderNearSeparator() {
    return <View style={styles.nearSeparator} />;
  }
  navigate = () => {
    this.props.navigation.navigate("AcceptRequest");
  };
  render() {
    const {
      contentContainerStyle,
      containerStyle,
      cardStyle,
      cardImageStyle,
      cardTextChanpStyle,
      textholderStyle,
      cardItemStyle,
      cardItemImageStyle,
      menuStyle,
      textContainerStyle,
      providerStyle,
      starContainerStyle,
      subTextStyle,
      starTextStyle
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
                  "https://image.shutterstock.com/image-vector/black-friday-sale-banner-260nw-507747880.jpg"
              }}
              style={cardImageStyle}
              resizeMode="cover"
            />
            <View>
              <View style={textholderStyle}>
                <Text style={cardTextChanpStyle}>Service Name</Text>
                <Text>12 Dec</Text>
              </View>
              <View style={textholderStyle}>
                <Text style={cardTextChanpStyle}>From 120 SAR to 300 SAR</Text>
                <Image
                  source={require("../../assets/icons/other/downarrow.png")}
                  style={menuStyle}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={cardItemStyle}
            elevation={3}
            onPress={() => this.navigate()}
          >
            <Image
              source={{
                uri:
                  "http://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
              }}
              style={cardItemImageStyle}
              resizeMode="cover"
            />
            <View style={textContainerStyle}>
              <Text style={providerStyle}>Provider name</Text>
              <Text style={subTextStyle}>Wedding Procession</Text>
              <View style={starContainerStyle}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={3}
                  selectedStar={rating => console.log(rating)}
                  fullStar={require("../../assets/icons/other/fullStar.png")}
                  emptyStar={require("../../assets/icons/other/emptyStar.png")}
                  starSize={scale(12)}
                  starStyle={{ width: scale(12), height: verticalScale(12) }}
                />
                <Text style={starTextStyle}>(3.0)</Text>
              </View>
            </View>
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
    marginTop: verticalScale(18)
  },
  contentContainerStyle: {
    alignItems: "flex-start",
    flexGrow: 1,
    backgroundColor: "#F7F8F8"
  },
  cardStyle: {
    height: verticalScale(74.27),
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
  cardItemStyle: {
    height: verticalScale(95),
    width: width - 40,
    backgroundColor: "#FFF",
    marginHorizontal: scale(20),
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: verticalScale(15)
  },
  cardImageStyle: {
    width: scale(44),
    height: verticalScale(44),
    borderRadius: 100,
    resizeMode: "contain",
    marginLeft: scale(12),
    marginRight: scale(18)
  },
  cardItemImageStyle: {
    width: scale(75),
    height: verticalScale(75),
    borderRadius: 100,
    resizeMode: "contain",
    marginLeft: scale(15),
    marginVertical: scale(10)
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: scale(240)
  },
  menuStyle: {
    width: scale(10),
    height: verticalScale(15),
    resizeMode: "contain"
  },
  providerStyle: {
    fontSize: moderateScale(18),
    color: "#000"
  },
  subTextStyle: {
    fontSize: moderateScale(12),
    color: "#B9B7B8",
    marginTop: verticalScale(5)
  },
  textContainerStyle: {
    marginVertical: verticalScale(15),
    marginLeft: scale(15)
  },
  starContainerStyle: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(8)
  },
  starTextStyle: {
    fontSize: moderateScale(12),
    textAlign: "right",
    color: "#5C5C5C",
    marginLeft: scale(6)
  }
});
const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(PSpecialOffer);
