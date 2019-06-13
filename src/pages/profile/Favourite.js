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
import { Container, Button, EmptyPage } from "../../components/common";
import {
  verticalScale,
  scale,
  width,
  height,
  moderateScale
} from "../..//Helpers";
import strings from "../../strings";
import FavouriteCard from "./FavouriteCard";
import {} from "../../actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class Favourite extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  renderItems({ item, index }) {
    return (
      <FavouriteCard
        type="event"
        title="Wedding Cack"
        name="Provider Name"
        buttonTitle="Book"
      />
    );
  }
  renderNearSeparator() {
    return <View style={styles.nearSeparator} />;
  }

  render() {
    const { contentContainerStyle } = styles;

    return (
      <FlatList
        contentContainerStyle={contentContainerStyle}
        data={[1, 2, 3]}
        renderItem={this.renderItems}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "flex-start",
    flexGrow: 1,
    backgroundColor: "#F7F8F8"
  }
});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(Favourite);
