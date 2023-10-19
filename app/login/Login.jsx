import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import colors from "../../constants/colors";

import TextCoiny from "../../components/Text/TextCoiny";
import TextRoboto from "../../components/Text/textRoboto";
import ButtonRed from "../../components/buttons/ButtonRed";
import container from "../../styles/container";

export default function Login() {
  return (
    <>
      <SafeAreaProvider
        style={(container.container, { backgroundColor: colors.Grey })}
      >
        <TextCoiny text={"StepUp"} />
        <TextRoboto text={"We are Frogs"} />
        <ButtonRed text={"federico"} />
      </SafeAreaProvider>
      <StatusBar style={"auto"} hidden />
    </>
  );
}

const styles = StyleSheet.create({});
