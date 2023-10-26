import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import colors from "../../constants/colors";

export default function ButtonRed({ text, func }) {
  return (
    <Pressable style={styles.button} onPress={func}>
      <Text style={styles.buttonText}>{text ? text : "null"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "50%",
    height: 32,
    backgroundColor: colors.Amaranth,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});
