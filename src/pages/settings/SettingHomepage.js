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
  moderateScale
} from "../../Helpers";
import strings from "../../strings";
import {
    logout
} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";


class SettingHomepage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        navigation,
        userObj
    } = this.props
    const {
        contentContainerStyle,
        langContainerStyle,
        settingOptionStyle,
        langButtonContainerStyle,
        langButtonTextStyle,
        hrStyle
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
            <TouchableOpacity style={langContainerStyle} onPress={() => navigation.navigate('LangPage')}>
                <Text style={settingOptionStyle}>{strings.language}</Text>
                <View style={langButtonContainerStyle}>
                    <Text style={langButtonTextStyle}>{I18nManager.isRTL ? strings.arabic : strings.english}</Text>
                </View>
            </TouchableOpacity>
            <View style={hrStyle}/>
            <TouchableOpacity style={langContainerStyle} onPress={() => navigation.navigate('AboutApp')}>
                <Text style={settingOptionStyle}>{strings.aboutApp}</Text>
            </TouchableOpacity>
            <View style={hrStyle}/>
            <TouchableOpacity style={langContainerStyle} onPress={() => navigation.navigate('AboutDev')}>
                <Text style={settingOptionStyle}>{strings.aboutDev}</Text>
            </TouchableOpacity>
            <View style={hrStyle}/>
            <TouchableOpacity style={langContainerStyle} onPress={() => navigation.navigate('TermsAndCondations')}>
                <Text style={settingOptionStyle}>{strings.termsAndCond}</Text>
            </TouchableOpacity>
            <View style={hrStyle}/>
            <TouchableOpacity style={langContainerStyle} onPress={() => navigation.navigate('CustomerService')}>
                <Text style={settingOptionStyle}>{strings.customerService}</Text>
            </TouchableOpacity>
            {
                userObj ? 
                <View>
                    <View style={hrStyle}/>
                    <TouchableOpacity style={langContainerStyle} onPress={() => this.props.logout(navigation)}>
                        <Text style={settingOptionStyle}>{strings.logout}</Text>
                    </TouchableOpacity>
                </View>
                : <View style={{width: 0, height: 0}}/>
            }
            
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
    paddingHorizontal: scale(12)
  },
  langContainerStyle:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(20),
      height: verticalScale(70)
  },
  settingOptionStyle:{
      fontSize: moderateScale(16),
      textAlign: 'left',
      color: '#000000'
  },
  langButtonContainerStyle:{
      backgroundColor: 'rgba(185, 183,184,0.28)',
      width: scale(82),
      height: verticalScale(34),
      borderRadius: moderateScale(17),
      alignItems: 'center',
      justifyContent: 'center'
  },
  langButtonTextStyle:{
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: '#B9B7B8'
  },
  hrStyle:{
      width: scale(339),
      alignSelf: 'center',
      height: verticalScale(1),
      backgroundColor: 'rgba(185, 183,184,0.28)'
  }
});

const mapStateToProps = ({user}) => {
    const {
        userObj
    } = user
  return {userObj};
};

export default connect(
  mapStateToProps,
  {logout}
)(SettingHomepage);
