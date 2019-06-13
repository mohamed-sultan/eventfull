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


class NewPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
        contentContainerStyle,
        appLogoStyle,
        phaseTextStyle,
    } = styles;
    const { fromError } = this.props;
    return (
        <Container>
            <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    style={{flex:1}}
                    contentContainerStyle={{flex: 1}}
                >
                <LinearGradient
                    style={contentContainerStyle}
                    colors={['#FFFFFF', '#F7F8F8']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Image source={require('../../assets/icons/other/shield.png')} style={appLogoStyle}/>
                    <Text style={phaseTextStyle}>{strings.enterNewPass}</Text>
                    <AuthInput 
                        //style={{marginBottom: verticalScale(65)}}
                        value={''}
                        //error={emailError}
                        onChangeText={(value) => console.log('mail')}
                        placeholder={strings.password}
                        secureTextEntry
                    />
                    <AuthInput 
                        style={{marginBottom: verticalScale(64), marginTop: verticalScale(15)}}
                        value={''}
                        //error={emailError}
                        onChangeText={(value) => console.log('mail')}
                        placeholder={strings.passwordConfirmation}
                        secureTextEntry
                    />
                    <View>
                        <SubmitButton
                            buttonText={strings.save}
                            onPress={() => console.log('submit')}
                            containerStyle={{ position: 'relative'}}
                        />
                    </View>
                </LinearGradient>
            </ScrollView>
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
      width: scale(74.89),
      height: verticalScale(80.3),
      alignSelf: 'center',
      resizeMode: 'contain'
  },
  phaseTextStyle:{
      fontSize: moderateScale(12),
      color: '#000',
      textAlign: 'center',
      marginTop: verticalScale(18),
      marginBottom: verticalScale(52)
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(NewPassword);
