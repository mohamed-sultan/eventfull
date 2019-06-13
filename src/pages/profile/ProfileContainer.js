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
import { TabView, SceneMap } from "react-native-tab-view";
import Animated from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Profile, PSpecialOffer, Favourite } from "../index";
import { Container, Button, EmptyPage } from "../../components/common";
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

class ProfileContainer extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "Profile", title: "Profile", navigation: this.props.navigation },
      {
        key: "PSpecialOffer",
        title: "SpecialOffer",
        navigation: this.props.navigation
      },
      {
        key: "Favourite",
        title: "Favourite",
        navigation: this.props.navigation
      }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <LinearGradient
        colors={["#b0d247", "#2eb894"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.tabBar}
      >
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 100 : 255
                )
              })
            ),
            255,
            255
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    );
  };

  _renderScene = SceneMap({
    Profile: Profile,
    PSpecialOffer: PSpecialOffer,
    Favourite: Favourite
  });

  render() {
    const {} = styles;

    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: getStatusBarHeight(),
    height: verticalScale(75)
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(ProfileContainer);
