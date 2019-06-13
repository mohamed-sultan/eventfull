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


class TermsAndCondations extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        contentContainerStyle,
        headerTextStyle,
        headerSecTextStyle,
        termsTextStyle
    } = styles;
    return (
        <Container>
            <LinearGradient
                style={contentContainerStyle}
                colors={['#FFFFFF', '#F7F8F8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                flipOnRTL={true}
            >
                <Text style={headerTextStyle}>{strings.termsPhase}</Text>
                <Text style={headerSecTextStyle}>{strings.termsRead}</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: verticalScale(26), height: verticalScale(259)}} contentContainerStyle={{paddingVertical: verticalScale(15), }}>
                    <Text style={termsTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                </ScrollView>
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
    fontSize: moderateScale(18),
    textAlign: 'left',
    color: '#000000',
    fontWeight: 'bold'
  },
  headerSecTextStyle:{
    fontSize: moderateScale(14),
    textAlign: 'left',
    color: '#B9B7B8',
    marginTop: verticalScale(8)
  },
  termsTextStyle:{
    fontSize: moderateScale(15),
    textAlign: 'left',
    color: '#000000',
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(TermsAndCondations);
