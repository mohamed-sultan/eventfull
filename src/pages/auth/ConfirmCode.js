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
import CodeInput from 'react-native-confirmation-code-field';


class ConfirmCode extends React.Component {
  containerProps = { style: styles.containerInputStyle };
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  cellProps = ({ hasValue }) => {
    return {
      style: styles.inputContainer,
    };
  };
  render() {
    const {
        navigation
    } = this.props
    const {
        contentContainerStyle,
        appLogoStyle,
        phaseTextStyle,
        sendAgainContainerStyle,
        iconStyle,
        sendAgainTextStyle,
    } = styles;
    return (
        <Container>
            <LinearGradient
                style={contentContainerStyle}
                colors={['#FFFFFF', '#F7F8F8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            >
                <Image source={require('../../assets/icons/other/mail.png')} style={appLogoStyle}/>
                <Text style={phaseTextStyle}>{strings.confirmPhase}</Text>
                <View style={{height: verticalScale(72)}}>
                    <CodeInput 
                        onFulfill={(value) => console.log(value)} 
                        activeColor={'#AF66A8'}
                        inactiveColor={'#AF66A8'}
                        cellBorderWidth={moderateScale(1)}
                        variant={'border-circle'}
                        codeLength={4}
                        //containerProps={this.containerProps}
                        cellProps={this.cellProps}
                    />
                </View>
                <TouchableOpacity style={sendAgainContainerStyle}>
                    <Image source={require('../../assets/icons/other/i.png')} style={iconStyle}/>
                    <Text style={sendAgainTextStyle}>{strings.sendCodeAgain}</Text>
                </TouchableOpacity>
                <View>
                    <SubmitButton
                        buttonText={strings.confirmCode}
                        onPress={() => navigation.navigate('NewPassword')}
                        containerStyle={{ position: 'relative'}}
                    />
                </View>
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
      width: scale(75.64),
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
  },
  containerInputStyle:{
    height: verticalScale(72)
  },
  sendAgainContainerStyle:{
      marginTop: verticalScale(40),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(50)
  },
  sendAgainTextStyle:{
    fontSize: moderateScale(12),
    color: '#B9B7B8',
    textAlign: 'right',
    textDecorationLine: 'underline'
  },
  iconStyle:{
      width: scale(13.05),
      height: verticalScale(13.05),
      resizeMode: 'contain'
  },
  inputContainer:{
      width: scale(60.55),
      height: verticalScale(69.58),
      borderRadius: verticalScale(30),
      backgroundColor: '#fff',
      fontSize: moderateScale(40),
      shadowColor: 'rgba(175,102,168,0.1)',
      shadowOffset: {width: 0, height: 3},
      shadowRadius: 6,
      shadowOpacity: 1,
      elevation: 2
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(ConfirmCode);
