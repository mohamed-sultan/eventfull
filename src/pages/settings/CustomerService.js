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


class CustomerService extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const {
      navigation
    } = this.props
    const {
      InputSepratorStyle,
      contentContainerStyle,
      imageStyle,
      headerMessageStyle
    } = styles;
    const { fromError } = this.props;
    return (
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{ flex: 1 }}
          contentContainerStyle={contentContainerStyle}
        >
            <LinearGradient
                style={{paddingTop: verticalScale(90), flex: 1, paddingHorizontal: scale(12), alignItems: 'center', width: width}}
                colors={['#FFFFFF', '#F7F8F8']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            >         
                <Image source={require('../../assets/icons/other/callBig.png')} style={imageStyle}/>
                <Text style={headerMessageStyle}>{strings.customerPhase}</Text>       
                <AuthInput
                value={""}
                //error={''Error}
                onChangeText={value => console.log(value)}
                placeholder={strings.yourName}
                />
                <AuthInput
                style={InputSepratorStyle}
                value={""}
                //error={''Error}
                onChangeText={value => console.log(value)}
                placeholder={strings.email}
                // multiline
                />
                <AuthInput
                style={[InputSepratorStyle, {marginBottom: verticalScale(40)}]}
                value={""}
                //error={''Error}
                onChangeText={value => console.log(value)}
                placeholder={strings.message}
                // multiline
                />
                <View style={{marginTop: verticalScale(40)}}>
                    <SubmitButton
                        buttonText={strings.submit}
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
    alignItems: "flex-start",
    flexGrow: 1
  },
  InputSepratorStyle: {
    marginTop: verticalScale(20)
  },
  headerMessageStyle:{
      fontSize: moderateScale(12),
      color: '#000',
      textAlign: 'center',
      marginTop: verticalScale(12),
      marginBottom: verticalScale(35)
  },
  imageStyle:{
      width: scale(77.93),
      height: verticalScale(79.8),
      resizeMode: 'contain'
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(CustomerService);
