import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useFonts, Coiny_400Regular } from "@expo-google-fonts/coiny";

export default function TextCoiny({ text, size, color }) {
  let [fontsLoaded, fontError] = useFonts({
    Coiny_400Regular,
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
    fontFamily: "Coiny_400Regular",
  },
});
