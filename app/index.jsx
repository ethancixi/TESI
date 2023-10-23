import React from "react";

import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

import { useFonts, Coiny_400Regular } from "@expo-google-fonts/coiny";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import container from "../styles/container";
import colors from "../constants/colors";
import TextRoboto from "../components/Text/textRoboto";
import fontsize from "../constants/fontsize";
import Logo from "../components/Logo";

export default function index() {
  let [fontsLoaded, fontError] = useFonts({
    Coiny_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      style={{ ...container.container, ...{ backgroundColor: colors.Grey } }}
    >
      <Logo />
      <Link href={"/login/Login"} asChild>
        <Pressable style={styles.buttonLog}>
          <TextRoboto
            style={styles.buttonTextLog}
            size={fontsize.fontsize32}
            color={colors.White}
            text={"Login"}
          />
        </Pressable>
      </Link>
      <Link href={"/login/SignUp"} asChild>
        <Pressable style={styles.buttonReg}>
          <TextRoboto
            style={styles.buttonTextReg}
            size={fontsize.fontsize32}
            color={colors.OffWhite}
            text={"Registrati"}
          />
        </Pressable>
      </Link>
      <Image style={styles.theatre} source={require("../assets/teatro.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonLog: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 64,
    backgroundColor: colors.Grey,
    borderRadius: 32,
    marginVertical: 16,
    borderWidth: 2,
    borderColor: colors.Amaranth,
  },
  buttonReg: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 64,
    backgroundColor: colors.Amaranth,
    borderRadius: 32,
    marginVertical: 16,
    borderWidth: 2,
    borderColor: colors.OffWhite,
  },
  buttonTextReg: {
    color: "white",
    fontSize: 32,
  },
  buttonTextLog: {
    color: colors.Amaranth,
    fontSize: 32,
  },
  theatre: {
    position: "absolute",
    bottom: 0,
    height: "70%",
    width: "100%",
    zIndex: -10,
  },
});
