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


class AboutApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        contentContainerStyle,
        appLogoStyle,
        phaseTextStyle
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
                <Image source={require('../../assets/icons/other/appLogo.png')} style={appLogoStyle}/>
                <Text style={phaseTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
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
      width: scale(123),
      height: verticalScale(124),
      alignSelf: 'center',
      resizeMode: 'cover'
  },
  phaseTextStyle:{
      fontSize: moderateScale(15),
      color: '#000',
      textAlign: 'left',
      marginTop: verticalScale(27)
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(AboutApp);
