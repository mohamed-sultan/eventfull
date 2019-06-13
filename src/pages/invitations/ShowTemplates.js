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


class ShowTemplates extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        contentContainerStyle,        
        showTemplatesContainerStyle,
        templateImageStyle,
        hrStyle,
        buttonContainerStyle,
        buttonTextStyle
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
                <View style={showTemplatesContainerStyle}>
                    <Image source={require('../../assets/images/template.png')} style={templateImageStyle}/>
                    <View style={hrStyle}/>
                    <View style={buttonContainerStyle}>
                        <TouchableOpacity>
                            <Text style={buttonTextStyle}>{strings.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={buttonTextStyle}>{strings.share}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
  showTemplatesContainerStyle:{
      width: scale(329),
      height: verticalScale(521),
      backgroundColor: '#FFFFFF',
      borderRadius: moderateScale(10),
      shadowColor: 'rgba(185,183,184,0.46)', 
      shadowOffset: {width: 0, height: 3},
      shadowRadius: 6,
      shadowOpacity: 1,
      paddingHorizontal: scale(13),
      paddingVertical: verticalScale(20),
      marginBottom: verticalScale(30)
  },
  templateImageStyle:{
    width: scale(304),
    height: verticalScale(412),
    resizeMode: 'cover'
  },
  hrStyle:{
    width: scale(329),
    height: verticalScale(1),
    backgroundColor:'rgba(185,183,184,0.26)',
    marginTop: verticalScale(30),
    alignSelf: 'center'
  },
  buttonContainerStyle:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: scale(16),
      marginTop: verticalScale(14)
  },
  buttonTextStyle:{
      fontSize: moderateScale(16),
      color: '#B9B7B8'
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(ShowTemplates);
