import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../constants/colors";
import TextCoiny from "./Text/TextCoiny";
import fontsize from "../constants/fontsize";

export default function () {
  return (
    <View style={styles.containerVertical}>
      <View style={styles.pin}>
        <Image style={styles.image} source={require("../assets/MapPin.png")} />
      </View>
      <TextCoiny
        text={"StepUp"}
        color={colors.OffWhite}
        size={fontsize.fontsize48}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerVertical: {
    alignItems: "center",
    position: "absolute",
    top: 16,
  },
  pin: { marginVertical: -12 },
  image: {
    height: 64,
    width: 64,
  },
});
