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


class LangPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        contentContainerStyle,
        headerTextStyle,
        activeButtonContainerStyle,
        activeButtonText,
        buttonImageStyle,
        inActiveButtonContainerStyle,
        inActiveButtonText
    } = styles;
    const { fromError } = this.props;
    return (
        <Container>
            <LinearGradient
                style={contentContainerStyle}
                colors={['#FFFFFF', '#F7F8F8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                flipOnRTL={true}
            >
                <Text style={headerTextStyle}>{strings.langPhase}</Text>
                <TouchableOpacity style={activeButtonContainerStyle} >
                    <Text style={activeButtonText}>{I18nManager.isRTL ? strings.arabic : strings.english}</Text>
                    <Image style={buttonImageStyle} source={require('../../assets/icons/other/check.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={inActiveButtonContainerStyle} onPress={() => changeAppLanguage(I18nManager.isRTL ? 'en' : 'ar')}>
                    <Text style={inActiveButtonText}>{I18nManager.isRTL ? strings.english : strings.arabic}</Text>
                </TouchableOpacity>
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
    paddingHorizontal: scale(31),
    width: width
  },
  headerTextStyle:{
    fontSize: moderateScale(12),
    textAlign: 'left',
    color: '#B9B7B8'
  },
  activeButtonContainerStyle:{
    backgroundColor: '#6B55A3',
    flexDirection: 'row',
    width: scale(144),
    height: verticalScale(45),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: verticalScale(34),
    shadowColor: 'rgba(107,85,163,0.3)',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 2
  },
  activeButtonText:{
    fontSize: moderateScale(14),
    textAlign: 'left',
    color: '#FFFFFF'
  },
  buttonImageStyle:{
    width: scale(17.6),
    height: verticalScale(13.4),
    resizeMode: 'contain'
  },
  inActiveButtonContainerStyle:{
    backgroundColor: 'rgba(0,0,0,0.11)',
    width: scale(101),
    height: verticalScale(45),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(16)
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(LangPage);
