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
  AuthInput,
  SubmitButton
} from "../../components/common";
import {
  verticalScale,
  scale,
  width,
  height,
  moderateScale,
  changeAppLanguage
} from "../../Helpers";
import strings from "../../strings";
import {

} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";


class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        navigation
    } = this.props
    const {
        contentContainerStyle,
        appLogoStyle,
        phaseTextStyle,
    } = styles;
    return (
        <Container>
            <LinearGradient
                style={contentContainerStyle}
                colors={['#FFFFFF', '#F7F8F8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            >
                <Image source={require('../../assets/icons/other/padlock.png')} style={appLogoStyle}/>
                <Text style={phaseTextStyle}>{strings.forgetPasswordPhase}</Text>
                <AuthInput 
                    style={{marginBottom: verticalScale(65)}}
                    value={''}
                    //error={emailError}
                    onChangeText={(value) => console.log('mail')}
                    placeholder={strings.email}
                />
                <SubmitButton
                    buttonText={strings.sendCode}
                    onPress={() => navigation.navigate('ConfirmCode')}
                    containerStyle={{ position: 'relative'}}
                />
            </LinearGradient>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    alignSelf: 'center', 
    paddingTop: verticalScale(120),
    paddingHorizontal: scale(30),
    width: width
  },
  appLogoStyle:{
      width: scale(67.73),
      height: verticalScale(80.3),
      alignSelf: 'center',
      resizeMode: 'contain'
  },
  phaseTextStyle:{
      fontSize: moderateScale(12),
      color: '#000',
      textAlign: 'center',
      marginTop: verticalScale(18),
      marginBottom: verticalScale(27)
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(ForgetPassword);
