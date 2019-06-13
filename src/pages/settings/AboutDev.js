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


class AboutDev extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        contentContainerStyle,
        appLogoStyle,
        phaseTextStyle,
        sectionHeadTextStyle,
        methodContainerStyle,
        sectionIconStyle,
        sectionTextStyle
    } = styles;
    const { fromError } = this.props;
    return (
        <Container>
            <LinearGradient
                style={contentContainerStyle}
                colors={['#FFFFFF', '#F7F8F8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            >
                <Image source={require('../../assets/icons/other/fudexLogo.png')} style={appLogoStyle}/>
                <Text style={phaseTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                <Text style={sectionHeadTextStyle}>{strings.contactUs}</Text>
                <View style={methodContainerStyle}>
                    <Image source={require('../../assets/icons/other/call.png')} style={sectionIconStyle}/>
                    <Text style={sectionTextStyle}>056066666</Text>
                </View>
                <View style={methodContainerStyle}>
                    <Image source={require('../../assets/icons/other/message.png')} style={[sectionIconStyle, {width: scale(16), height: verticalScale(12.6)}]}/>
                    <Text style={sectionTextStyle}>fudex@gmail.com</Text>
                </View>
                <View style={methodContainerStyle}>
                <Image source={require('../../assets/icons/other/whatsapp.png')} style={[sectionIconStyle, {width: scale(18), height: verticalScale(18)}]}/>
                    <Text style={sectionTextStyle}>056066666</Text>
                </View>
            </LinearGradient>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    alignSelf: 'flex-start', 
    paddingTop: verticalScale(90),
    paddingHorizontal: scale(27),
    width: width
  },
  appLogoStyle:{
      width: scale(178),
      height: verticalScale(59),
      alignSelf: 'center',
      resizeMode: 'cover'
  },
  phaseTextStyle:{
      fontSize: moderateScale(15),
      color: '#000',
      textAlign: 'left',
      marginTop: verticalScale(27)
  },
  sectionHeadTextStyle:{
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#3A3A3A',
    textAlign: 'left',
    marginTop: verticalScale(16)
  },
  methodContainerStyle:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(21)
  },
  sectionIconStyle:{
      width: scale(16.1),
      height: verticalScale(16.1),
      resizeMode: 'contain',
      marginRight: scale(13)
  },
  sectionTextStyle:{
    fontSize: moderateScale(14),
    color: '#6B55A3',
    textAlign: 'right',
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(AboutDev);
