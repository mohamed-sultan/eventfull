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
  AuthInput,
  AuthDateInput
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


class EditTemplates extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
      navigation
    } = this.props
    const {
      welcomeContainerStyle,
      welcomeTextStyle,
      homeMsgStyle,
      headerContainerStyle,
      InputSepratorStyle,
      inputContainerStyle,
      inputStyle,
      budgetTextStyle,
      contentContainerStyle,
      addFriendContainerStyle,
      addFriendTextStyle,
      addFriendListStyle,
      circleConainrStyle,
      circleImageStyle,
      circleAddStyle,
      addIconStyle,
      contactContainerStyle,
      friendNameStyle
    } = styles;
    const { fromError } = this.props;
    return (
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          style={{ flex: 1 }}
          contentContainerStyle={contentContainerStyle}
        >
          <View style={{alignSelf: 'center', paddingTop: verticalScale(100)}}>
            <AuthInput
              value={""}
              //error={''Error}
              onChangeText={value => console.log(value)}
              placeholder={strings.mainTitle}
            />
            <AuthInput
              style={InputSepratorStyle}
              value={""}
              //error={''Error}
              onChangeText={value => console.log(value)}
              placeholder={strings.invitationText}
              // multiline
            />
            <AuthInput
              style={InputSepratorStyle}
              value={""}
              //error={''Error}
              onChangeText={value => console.log(value)}
              placeholder={strings.address}
              // multiline
            />
            <AuthDateInput 
              style={InputSepratorStyle}
              value={''}
              //error={passwordError}
              onChangeText={(value) => console.log(value)}
              placeholder={strings.invitationDate}
              iconStyle={{width: scale(8.88), height: verticalScale(14.5)}}
            />
            <AuthInput
              style={InputSepratorStyle}
              value={""}
              //error={''Error}
              onChangeText={value => console.log(value)}
              placeholder={strings.telephone}
              // multiline
            />
            <AuthInput
              style={InputSepratorStyle}
              value={""}
              //error={''Error}
              onChangeText={value => console.log(value)}
              placeholder={strings.ownerOfInvitation}
              // multiline
            />
          </View>
          <View style={addFriendContainerStyle}>
              <Text style={addFriendTextStyle}>{strings.addFriends}</Text>
              <View style={addFriendListStyle}>
                <View style={contactContainerStyle}>
                  <View style={circleConainrStyle}>
                    <Image source={require('../../assets/images/hallowen.png')} style={circleImageStyle}/>
                  </View>
                    <Text style={friendNameStyle}>Naser Atef</Text>
                </View>
                <View style={contactContainerStyle}>
                  <View style={circleConainrStyle}>
                    <Image source={require('../../assets/images/hallowen.png')} style={circleImageStyle}/>
                  </View>
                    <Text style={friendNameStyle}>Naser Atef</Text>
                </View>
                <View style={contactContainerStyle}>
                  <View style={circleConainrStyle}>
                    <Image source={require('../../assets/images/hallowen.png')} style={circleImageStyle}/>
                  </View>
                    <Text style={friendNameStyle}>Naser Atef</Text>
                </View>
                <TouchableOpacity style={[circleConainrStyle, circleAddStyle]}>
                  <Image source={require('../../assets/icons/other/add.png')} style={addIconStyle}/>
                </TouchableOpacity>
              </View>
          </View>
          <SubmitButton
                buttonText={strings.view}
                onPress={() => navigation.navigate('ShowTemplates')}
                containerStyle={{ position: 'relative', marginTop: verticalScale(30)}}
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
  },
  addFriendContainerStyle:{
    alignItems: 'flex-start',
    marginTop: verticalScale(30),
    //paddingHorizontal: scale(21)
    marginBottom: verticalScale(30)
  },
  addFriendTextStyle:{
    marginLeft: scale(25),
    fontSize: moderateScale(14),
    color: "#000",
    textAlign: "left",
    marginBottom: verticalScale(16)
  },
  addFriendListStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circleConainrStyle:{
    width: scale(70),
    height: scale(70),
    borderRadius: scale(35),
    borderWidth: scale(1),
    borderColor: '#ECEBEB',
  },
  circleImageStyle:{
    width: scale(70),
    height: scale(70),
    borderRadius: scale(35),
    resizeMode: 'cover'
  },
  circleAddStyle:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  addIconStyle:{
    width: scale(19.91),
    height: verticalScale(19.91),
    resizeMode: 'contain'
  },
  contactContainerStyle:{
    height: verticalScale(97),
    justifyContent: 'space-between',
    marginRight: scale(8)
  },
  friendNameStyle:{
    fontSize: moderateScale(14),
    color: "#000",
    textAlign: "center",
    alignSelf:'center'
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(EditTemplates);
