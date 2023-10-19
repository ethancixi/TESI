import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import colors from "../../constants/colors";

export default function ButtonRed({ text }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{text ? text : "null"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 108,
    height: 32,
    backgroundColor: colors.Amaranth,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});
