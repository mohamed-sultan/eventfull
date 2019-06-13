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

class FavouriteCard extends React.Component {
  render() {
    const {
      cardStyle,
      imageStyle,
      titleStyle,
      imageHeart,
      likesTest,
      cardheader,
      providerStyle,
      contentContainerStyle,
      descriptionStyle,
      cardFooter,
      pricetext,
      buttonStyle,
      buttonText,
      locationIcon
    } = styles;
    return (
      <View style={cardStyle}>
        <Image
          resizeMode="cover"
          style={imageStyle}
          source={{
            uri:
              "http://www.bellaluzgifts.com/wp-content/uploads/2017/09/TheMaximParty2016Pavilion.jpg"
          }}
        />
        <View>
          <View style={cardheader}>
            <Text style={titleStyle}>{this.props.title}</Text>
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Image
                resizeMode="contain"
                style={imageHeart}
                source={require("../../assets/icons/other/Heart2.png")}
              />
              <Text style={likesTest}>12,857</Text>
            </View>
          </View>
          {this.props.type === "party" ? null : (
            <Text style={providerStyle}>{this.props.name}</Text>
          )}
          <Text style={descriptionStyle}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim
          </Text>
          <View style={{ flexDirection: "row", marginLeft: scale(7) }}>
            {this.props.type === "party" ? (
              <Image
                resizeMode="contain"
                style={locationIcon}
                source={require("../../assets/icons/other/location.png")}
              />
            ) : null}
            {this.props.type === "party" ? (
              <Text style={providerStyle}>KSA-Dammam</Text>
            ) : null}
          </View>
          <View style={cardFooter}>
            {this.props.type === "provider" ? (
              <View />
            ) : (
              <Text style={pricetext}>122 SAR</Text>
            )}
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => console.log("book")}
            >
              <Text style={buttonText}>{this.props.buttonTitle}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardStyle: {
    marginTop: verticalScale(15),
    marginHorizontal: scale(20),
    backgroundColor: "#FFF",
    borderRadius: 5,
    flexDirection: "row",
    width: scale(321)
  },
  imageStyle: {
    width: scale(105),
    height: verticalScale(111),
    borderRadius: 5,
    marginVertical: verticalScale(8),
    marginLeft: scale(6)
  },
  titleStyle: {
    fontSize: moderateScale(16),
    color: "#000",
    marginRight: scale(53.5),
    width: scale(88)
  },
  imageHeart: {
    width: scale(11),
    height: verticalScale(10)
  },
  likesTest: {
    fontSize: moderateScale(8),
    color: "#000"
  },
  cardheader: {
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: scale(5),
    marginTop: verticalScale(11),
    justifyContent: "space-between"
  },
  providerStyle: {
    fontSize: moderateScale(8),
    color: "#B9B7B8",
    marginLeft: scale(10)
  },
  descriptionStyle: {
    fontSize: moderateScale(8),
    color: "#B9B7B8",
    marginLeft: scale(10),
    width: scale(178.69),
    height: verticalScale(30),
    marginTop: verticalScale(6.5)
  },
  cardFooter: {
    flexDirection: "row",
    marginLeft: scale(10),
    alignItems: "center",
    justifyContent: "space-between"
  },
  pricetext: {
    fontSize: moderateScale(10),
    color: "#000000"
  },
  buttonStyle: {
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#6B55A3",
    backgroundColor: "#FFF",
    width: scale(83),
    height: verticalScale(30),
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: moderateScale(12),
    color: "#6B55A3"
  },
  locationIcon: {
    width: scale(6),
    height: verticalScale(8)
  }
});
export default FavouriteCard;
