import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ButtonComp = ({ title, onpress }) => {
  return (
    <TouchableOpacity
      style={styles.button_container}
      activeOpacity={0.8}
      onPress={onpress}
    >
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#00A884",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  button_text: {
    color: "#FFFFFF",
    fontSize: moderateScale(14),
  },
});
export default ButtonComp;
