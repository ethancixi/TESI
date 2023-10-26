import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import colors from "../../constants/colors";

import TextRoboto from "../../components/Text/TextRoboto";
import container from "../../styles/container";
import Logo from "../../components/Logo";
import ButtonRed from "../../components/buttons/ButtonRed";
import horizontalContainer from "../../styles/horizontalContainer";
import verticalContainer from "../../styles/verticalContainer";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useLogin } from "../../store/loginStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useLogin((state) => state.isLoggedIn);
  const changeLoggedIn = useLogin((state) => state).changeIsLoggedIn;

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      changeLoggedIn;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user && isLoggedIn) {
      router.replace("/main/views/Map");
    }
  });

  return (
    <SafeAreaProvider
      style={{ ...container.container, ...{ backgroundColor: colors.Grey } }}
    >
      <Logo />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.Amaranth}
          style={{ margin: 64 }}
        />
      ) : (
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
          <View style={styles.loginForm}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.LightGrey}
              onChangeText={(newEmail) => setEmail(newEmail)}
              defaultValue={email}
              style={styles.inputBox}
              inputMode="email"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.LightGrey}
              onChangeText={(newPassword) => setPassword(newPassword)}
              defaultValue={password}
              style={styles.inputBox}
              secureTextEntry
              autoCapitalize="none"
            />
            <ButtonRed text={"Login"} func={signIn} />
            <TextRoboto text={"Password dimenticata?"} color={colors.White} />
          </View>

          <View style={verticalContainer.verticalContainer}>
            <TextRoboto text={"Oppure entra con"} color={colors.White} />
            <View
              style={{
                ...horizontalContainer.horizontalContainer,
                ...styles.googleFacebook,
              }}
            >
              <Image source={require("../../assets/social/facebook.png")} />
              <Image source={require("../../assets/social/google.png")} />
            </View>
          </View>
        </KeyboardAvoidingView>
      )}

      <View
        style={{
          ...horizontalContainer.horizontalContainer,
          ...styles.textAbsolute,
        }}
      >
        <TextRoboto text={"Non hai un account? "} color={colors.White} />

        <Link href={"/login/SignUp"} asChild>
          <Pressable>
            <TextRoboto
              style={styles.buttonTextLog}
              text={"Crealo!"}
              color={colors.Amaranth}
            />
          </Pressable>
        </Link>
      </View>
      <StatusBar style={styles.statusBar} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
    paddingVertical: 32,
    marginVertical: 32,
    borderBottomWidth: 2,
    borderBottomColor: colors.LightGrey,
  },
  keyboardView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "70%",
    color: colors.White,
    backgroundColor: colors.LightGreyOpacity02,
    padding: 6,
    borderRadius: 8,
  },
  googleFacebook: {
    padding: 16,
    gap: 48,
  },
  textAbsolute: {
    position: "absolute",
    bottom: 32,
  },
  statusBar: {
    flex: 1,
    backgroundColor: colors.Grey,
  },
});
