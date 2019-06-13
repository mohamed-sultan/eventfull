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
import StarRating from "react-native-star-rating";

class AcceptRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  renderproviders({ item, index }) {
    const {
      cardItemStyle,
      cardItemImageStyle,
      textContainerStyle,
      providerStyle,
      subTextStyle,
      starContainerStyle,
      starTextStyle
    } = styles;
    return (
      <TouchableOpacity
        style={cardItemStyle}
        elevation={3}
        onPress={() => console.log("ddd")}
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
    );
  }
  componentDidMount() {}

  render() {
    const {
      contentContainerStyle,
      offerDataStyle,
      offerDatatext,
      DataTextStyle,
      valueTextStyle,
      providerResponseStyle,
      providerResponseText,
      provierHeader,
      provierImage,
      provierHeaderText,
      starTextStyle,
      starContainerStyle,
      providerTextContainer,
      noteContainer,
      buttonStyle,
      buttonText,
      buttonContainer
    } = styles;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{ flex: 1, flexGrow: 1, backgroundColor: "#F7F8F8" }}
        contentContainerStyle={contentContainerStyle}
      >
        <Text style={offerDatatext}>{strings.offerData}</Text>
        <View style={offerDataStyle}>
          <Text style={DataTextStyle}>{strings.appropriatetype}</Text>
          <Text style={valueTextStyle}>Service Name</Text>
        </View>

        <View style={offerDataStyle}>
          <Text style={DataTextStyle}>{strings.budget}</Text>
          <Text style={valueTextStyle}>From 120 SAR to 300 SAR</Text>
        </View>

        <View style={offerDataStyle}>
          <Text style={DataTextStyle}>{strings.address}</Text>
          <Text style={valueTextStyle}>KSA-Dammam - elbadia Str</Text>
        </View>

        <View style={offerDataStyle}>
          <Text style={DataTextStyle}>{strings.notes}</Text>
          <Text style={valueTextStyle}>no notes</Text>
        </View>

        <View style={offerDataStyle}>
          <Text style={DataTextStyle}>{strings.DateTime}</Text>
          <Text style={valueTextStyle}>12 Des 2019 , 03:45 pm</Text>
        </View>
        <View style={offerDataStyle}>
          <Text style={DataTextStyle}>{strings.phoneNumber}</Text>
          <Text style={valueTextStyle}> - </Text>
        </View>
        <View style={providerResponseStyle}>
          <Text style={providerResponseText}>{strings.providerResponse}</Text>
          <View style={provierHeader}>
            <Image
              source={{
                uri:
                  "http://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
              }}
              style={provierImage}
              resizeMode="cover"
            />
            <View
              style={{
                marginLeft: scale(20),
                alignContent: "flex-start",
                justifyContent: "center"
              }}
            >
              <Text style={provierHeaderText}>Naser Hmmad </Text>
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
          </View>
          <View style={providerTextContainer}>
            <Text style={DataTextStyle}>{strings.DateTime}</Text>
            <Text style={valueTextStyle}>12 Des, from 3 pm to 8pm</Text>
          </View>
          <View style={providerTextContainer}>
            <Text style={DataTextStyle}>{strings.budget}</Text>
            <Text style={valueTextStyle}>250 SAR</Text>
          </View>
          <View style={providerTextContainer}>
            <Text style={DataTextStyle}>{strings.phoneNumber}</Text>
            <Text style={valueTextStyle}>-</Text>
          </View>
          <View style={noteContainer}>
            <Text style={[DataTextStyle, { width: scale(280) }]}>
              {strings.notes}
            </Text>
            <Text style={[valueTextStyle, { paddingRight: 5, paddingTop: 5 }]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and{" "}
            </Text>
          </View>
          <View style={buttonContainer}>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => console.log("ignore")}
            >
              <Text style={buttonText}>{strings.ignore}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                buttonStyle,
                { backgroundColor: "#6B55A3", marginLeft: scale(10) }
              ]}
              onPress={() => console.log("Accept")}
            >
              <Text style={[buttonText, { color: "white" }]}>
                {strings.AcceptRequest}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[offerDatatext, { marginTop: verticalScale(0) }]}>
          Other Response
        </Text>
        <View>
          <FlatList
            style={{
              backgroundColor: "#F7F8F8",
              marginBottom: verticalScale(25)
            }}
            // contentContainerStyle={}
            data={[1, 2]}
            renderItem={this.renderproviders}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: verticalScale(80),
    backgroundColor: "#F7F8F8"
  },
  offerDataStyle: {
    flexDirection: "row",
    marginLeft: scale(40),
    marginTop: verticalScale(27)
  },
  DataTextStyle: {
    fontSize: moderateScale(14),
    color: "#B9B7B8",
    marginRight: scale(21)
  },
  valueTextStyle: {
    fontSize: moderateScale(14),
    color: "#000"
  },
  offerDatatext: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(39),
    marginLeft: scale(29),
    fontWeight: "bold",
    color: "#000"
  },
  provierHeader: {
    flexDirection: "row",
    paddingLeft: scale(20),
    paddingTop: verticalScale(26)
  },
  provierImage: {
    height: verticalScale(75),
    width: scale(75),
    borderRadius: 100
  },
  provierHeaderText: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "black"
  },
  providerResponseStyle: {
    width: width - 30,
    backgroundColor: "#FFF",
    marginVertical: scale(32),
    marginLeft: scale(15),
    borderRadius: 5,
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  starContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "center",
    marginTop: verticalScale(8)
  },
  starTextStyle: {
    fontSize: moderateScale(12),
    textAlign: "right",
    color: "#5C5C5C",
    marginLeft: scale(6)
  },
  providerResponseText: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(17),
    marginLeft: verticalScale(17)
  },
  providerTextContainer: {
    flexDirection: "row",
    marginLeft: scale(12),
    marginTop: verticalScale(17)
  },
  noteContainer: {
    marginLeft: scale(12),
    marginTop: verticalScale(17)
  },
  buttonStyle: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#6B55A3",
    backgroundColor: "#FFF",
    width: scale(130),
    height: verticalScale(35),
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: "#6B55A3"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: verticalScale(40),
    paddingLeft: scale(30),
    paddingBottom: verticalScale(30)
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
    marginVertical: verticalScale(8)
  },
  cardItemImageStyle: {
    width: scale(75),
    height: verticalScale(75),
    borderRadius: 100,
    resizeMode: "contain",
    marginLeft: scale(15),
    marginVertical: scale(10)
  },
  textContainerStyle: {
    marginVertical: verticalScale(15),
    marginLeft: scale(15)
  },
  providerStyle: {
    fontSize: moderateScale(18),
    color: "#000"
  },
  subTextStyle: {
    fontSize: moderateScale(12),
    color: "#B9B7B8",
    marginTop: verticalScale(5)
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(AcceptRequest);
