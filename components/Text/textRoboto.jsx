import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function TextRoboto({ text, size, color }) {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
  });
  const propFontSize = size;
  const propColor = color;

  const propStyles = {
    fontSize: propFontSize,
    color: propColor,
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Text style={{ ...styles.font, ...propStyles }}>
      {text ? text : "null"}
    </Text>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "Roboto_400Regular",
  },
});
