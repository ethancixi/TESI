import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import colors from "../../constants/colors";

import TextCoiny from "../../components/Text/TextCoiny";
import TextRoboto from "../../components/Text/textRoboto";
import container from "../../styles/container";
import Logo from "../../components/Logo";
import ButtonRed from "../../components/buttons/ButtonRed";
import horizontalContainer from "../../styles/horizontalContainer";
import verticalContainer from "../../styles/verticalContainer";

import { FIREBASE_AUTH } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useLogin } from "../../store/loginStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCopy, setPasswordCopy] = useState("");
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useLogin((state) => state.isLoggedIn);
  const changeLoggedIn = useLogin((state) => state.changeIsLoggedIn);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      if (password === passwordCopy) {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        changeLoggedIn;
      } else {
        alert("le password non corrispondono!");
      }
    } catch (error) {
      console.log(error);
      alert("registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user && isLoggedIn) {
      router.replace("/main/Home");
    }
  });

  return (
    <SafeAreaProvider
      style={{
        ...container.container,
        ...{ backgroundColor: colors.Grey },
      }}
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
              placeholderTextColor={colors.White}
              onChangeText={(newEmail) => setEmail(newEmail)}
              defaultValue={email}
              style={styles.inputBox}
              inputMode="email"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={colors.White}
              onChangeText={(newUsername) => setUsername(newUsername)}
              defaultValue={username}
              style={styles.inputBox}
              inputMode="email"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Scegli una Password"
              placeholderTextColor={colors.White}
              onChangeText={(newPassword) => setPassword(newPassword)}
              defaultValue={password}
              style={styles.inputBox}
              secureTextEntry
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Ripeti la Password"
              placeholderTextColor={colors.White}
              onChangeText={(newPasswordCopy) =>
                setPasswordCopy(newPasswordCopy)
              }
              defaultValue={passwordCopy}
              style={styles.inputBox}
              secureTextEntry
              autoCapitalize="none"
            />
            <ButtonRed text={"Registrati"} func={signUp} />
          </View>

          <View style={verticalContainer.verticalContainer}>
            <TextRoboto text={"Oppure registrati con"} color={colors.White} />
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
        <TextRoboto text={"Hai giá un account? "} color={colors.White} />

        <Link href={"/login/Login"} asChild>
          <Pressable>
            <TextRoboto
              style={styles.buttonTextLog}
              text={"Accedi!"}
              color={colors.Amaranth}
            />
          </Pressable>
        </Link>
      </View>
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
    opacity: 0.2,
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
});
