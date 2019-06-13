import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  I18nManager
} from "react-native";
import { scale, moderateScale } from "../Helpers";

const HeaderButton = props => {
  const { icon, iconStyle, onPress, style } = props;
  const arabicIcon = I18nManager.isRTL ? {transform: [{ rotate: '180deg'}]} : {transform: [{ rotate: '0deg'}]}
  return (
    <TouchableOpacity style={[styles.containerStyle, style]} onPress={onPress}>
      <Image source={icon} style={[styles.iconStyle, iconStyle, arabicIcon]} />
    </TouchableOpacity>
  );
};

const HeaderButtonCustom = props => {
  const { icon, iconStyle, onPress, style } = props;
  const arabicIcon = I18nManager.isRTL ? {transform: [{ rotate: '180deg'}]} : {transform: [{ rotate: '0deg'}]}
  return (
    <TouchableHighlight
      style={[styles.containerStyle, style]}
      onPress={onPress}
      underlayColor={"transparent"}
    >
      <Image source={icon} style={[styles.iconStyle, iconStyle, arabicIcon]} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 20,
    paddingHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    height: 16,
    width: 16,
    resizeMode: "contain"
  }
});

export { HeaderButton, HeaderButtonCustom };
