import React from "react";
import { Link, Tabs, router, useRouter } from "expo-router";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import TextCoiny from "../../../components/Text/TextCoiny";
import TextRoboto from "../../../components/Text/TextRoboto";

import container from "../../../styles/container";
import { StatusBar } from "expo-status-bar";
import colors from "../../../constants/colors";
import verticalContainer from "../../../styles/verticalContainer";
import horizontalContainer from "../../../styles/horizontalContainer";

import { FIREBASE_AUTH } from "../../../firebaseConfig";
import { deleteUser, signOut } from "firebase/auth";

export default function Profile() {
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  const deleteMyUser = () => {
    deleteUser(user)
      .then(() => {
        console.log("user deleted");
        router.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("logout effettuato");
        router.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        ...container.container,
        ...{ backgroundColor: colors.Grey },
      }}
    >
      <View
        style={
          Platform.OS === "ios"
            ? styles.textAbsoluteIOS
            : styles.textAbsoluteAND
        }
      >
        <TextCoiny
          text={"StepUp"}
          color={colors.OffWhite}
          size={48}
          style={styles.textShadowTitle}
        />
      </View>
      <View
        style={{
          ...verticalContainer.verticalContainer,
          ...{
            marginVertical: "35%",
            width: "90%",
          },
        }}
      >
        <View style={verticalContainer.verticalContainer}>
          <Image
            source={require("../../../assets/icons/user.png")}
            style={{
              objectFit: "contain",
              height: 64,
              width: 64,
              margin: 32,
            }}
          />
          <TextCoiny
            text={user.displayName ? user.displayName : user.email}
            color={colors.White}
            size={24}
          />
        </View>
        <View
          style={{
            ...horizontalContainer.horizontalContainer,
            ...{
              justifyContent: "space-between",
              marginVertical: 16,
            },
          }}
        >
          <TextRoboto text={"Impostazioni"} color={colors.White} size={16} />
          <Image
            source={require("../../../assets/icons/adjustments-horizontal.png")}
            style={{
              objectFit: "contain",
              height: 24,
              width: 24,
            }}
          />
        </View>
        <ScrollView>
          <View
            style={{
              ...horizontalContainer.horizontalContainer,
              ...styles.settingsComponent,
            }}
          >
            <TextRoboto
              text={"Invita un amico"}
              color={colors.White}
              size={16}
            />
            <Image
              source={require("../../../assets/icons/share.png")}
              style={{
                objectFit: "contain",
                height: 24,
                width: 24,
              }}
            />
          </View>
          <View
            style={{
              ...horizontalContainer.horizontalContainer,
              ...styles.settingsComponent,
            }}
          >
            <TextRoboto
              text={"Manda un Feedback!"}
              color={colors.White}
              size={16}
            />
            <Image
              source={require("../../../assets/icons/chevron-right.png")}
              style={{
                objectFit: "contain",
                height: 24,
                width: 24,
              }}
            />
          </View>
          <Pressable onPress={logOut}>
            <View
              style={{
                ...horizontalContainer.horizontalContainer,
                ...styles.settingsComponent,
              }}
            >
              <TextRoboto text={"Log Out"} color={colors.White} size={16} />
              <Image
                source={require("../../../assets/icons/arrow-left-on-rectangle.png")}
                style={{
                  objectFit: "contain",
                  height: 24,
                  width: 24,
                }}
              />
            </View>
          </Pressable>
          <Pressable onPress={deleteMyUser}>
            <View
              style={{
                ...horizontalContainer.horizontalContainer,
                ...styles.settingsComponent,
                ...{ backgroundColor: colors.Amaranth },
              }}
            >
              <TextRoboto
                text={"Elimina Account"}
                color={colors.White}
                size={16}
              />
              <Image
                source={require("../../../assets/icons/trash.png")}
                style={{
                  objectFit: "contain",
                  height: 24,
                  width: 24,
                }}
              />
            </View>
          </Pressable>
        </ScrollView>
      </View>

      <StatusBar style={styles.statusBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  centeredIconIOS: {
    alignItems: "center",
    justifyContent: "center",
    top: 16,
  },
  centeredIconAND: {
    alignItems: "center",
    justifyContent: "center",
  },
  centralTabBarButton: {
    alignItems: "center",
    justifyContent: "center",
    top: -16,
  },
  statusBar: {
    flex: 1,
    backgroundColor: colors.Grey,
  },
  textAbsoluteIOS: {
    position: "absolute",
    top: "5%",
  },
  textAbsoluteAND: {
    position: "absolute",
    top: "2%",
  },
  settingsComponent: {
    justifyContent: "space-between",
    marginVertical: 8,
    backgroundColor: colors.LightGreyOpacity02,
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 16,
    columnGap: 32,
  },
});
