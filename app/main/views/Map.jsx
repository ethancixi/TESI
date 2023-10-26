import React, { useState } from "react";
import { Link, Tabs, router } from "expo-router";
import {
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import MapView from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import "react-native-gesture-handler";

import TextCoiny from "../../../components/Text/TextCoiny";
import TextRoboto from "../../../components/Text/TextRoboto";
import container from "../../../styles/container";
import verticalContainer from "../../../styles/verticalContainer";
import horizontalContainer from "../../../styles/horizontalContainer";
import colors from "../../../constants/colors";

import { categories } from "../../../constants/categories";

function CentralTabBarButton({ onPress }) {
  const distance = Platform.OS === "ios" ? -16 : -32;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        top: distance,
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/MapPin.png")}
          style={{ objectFit: "contain", height: 64, width: 64 }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default function Map() {
  const [showDateModal, setShowDateModal] = useState(false);
  const [isChecked1Day, setChecked1Day] = useState(false);
  const [isChecked3Days, setChecked3Days] = useState(false);
  const [isChecked7Days, setChecked7Days] = useState(false);
  const [isChecked30Days, setChecked30Days] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <View style={container.container}>
      <Tabs.Screen
        options={{
          title: "Map Screen",
          headerShown: false,
          tabBarButton: (props) => (
            <View>
              <CentralTabBarButton {...props} />
            </View>
          ),
        }}
      />
      <MapView style={styles.map} />

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
          ...container.container,
          ...styles.searchAndFiltersBox,
        }}
      >
        <View style={styles.searchAndFilters}>
          <View
            style={{
              ...horizontalContainer.horizontalContainer,
              ...styles.searchBarBox,
            }}
          >
            <Image
              source={require("../../../assets/MapPin.png")}
              style={{
                objectFit: "contain",
                height: 24,
                width: 24,
              }}
            />
            <TextInput
              placeholder="Cerca qui!"
              style={styles.searchBar}
              placeholderTextColor={colors.LightGrey}
            />
            <Image
              source={require("../../../assets/icons/magnifying-glass.png")}
              style={{
                objectFit: "contain",
                height: 24,
                width: 24,
              }}
            />
          </View>

          <ScrollView horizontal={true}>
            {categories.map((element) => (
              <View style={styles.category}>
                <TextRoboto text={element} color={colors.White} />
              </View>
            ))}
          </ScrollView>

          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={{
                ...styles.datepicker,
                ...horizontalContainer.horizontalContainer,
              }}
              onPress={() => setShowDateModal(!showDateModal)}
            >
              <TextRoboto text={"Data"} color={colors.White} />
              <Image
                source={
                  !showDateModal
                    ? require("../../../assets/icons/chevron-right.png")
                    : require("../../../assets/icons/chevron-down.png")
                }
                style={{
                  objectFit: "contain",
                  height: 24,
                  width: 24,
                }}
              />
            </Pressable>
            {showDateModal ? (
              <View style={styles.dateModal}>
                <View style={styles.checkbox}>
                  <Checkbox
                    value={isChecked1Day}
                    onValueChange={setChecked1Day}
                    color={isChecked1Day ? colors.Amaranth : undefined}
                  />
                  <TextRoboto text={"1 giorno"} color={colors.White} />
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    value={isChecked3Days}
                    onValueChange={setChecked3Days}
                    color={isChecked3Days ? colors.Amaranth : undefined}
                  />
                  <TextRoboto text={"3 giorni"} color={colors.White} />
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    value={isChecked7Days}
                    onValueChange={setChecked7Days}
                    color={isChecked7Days ? colors.Amaranth : undefined}
                  />
                  <TextRoboto text={"7 giorni"} color={colors.White} />
                </View>
                <View style={styles.checkbox}>
                  <Checkbox
                    value={isChecked30Days}
                    onValueChange={setChecked30Days}
                    color={isChecked30Days ? colors.Amaranth : undefined}
                  />
                  <TextRoboto text={"30 giorni"} color={colors.White} />
                </View>
              </View>
            ) : null}
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={styles.plus}
              onPress={() => router.push("/main/views/AddEvent")}
            >
              <Image
                source={require("../../../assets/icons/plus.png")}
                style={{
                  objectFit: "contain",
                  height: 24,
                  width: 24,
                }}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar style={styles.statusBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  textShadowTitle: {
    textShadowColor: colors.Grey,
    textShadowOffset: { width: 5, height: 5 },
  },
  statusBar: {
    flex: 1,
    backgroundColor: colors.Grey,
  },
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
  map: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  textAbsoluteIOS: {
    position: "absolute",
    top: "5%",
  },
  textAbsoluteAND: {
    position: "absolute",
    top: "2%",
  },
  searchAndFiltersBox: {
    position: "absolute",
    top: 0,
    justifyContent: "flex-start",
    marginTop: "25%",
    marginBottom: "35%",
    width: "85%",
  },
  searchAndFilters: {
    width: "100%",
    rowGap: 16,
  },
  searchBarBox: {
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.Grey,
    borderRadius: 32,
  },
  searchBar: {
    color: colors.White,
  },
  category: {
    backgroundColor: colors.Grey,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  datepicker: {
    maxWidth: "30%",
    backgroundColor: colors.Grey,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  dateModal: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.Grey,
    padding: 32,
    borderRadius: 16,
    rowGap: 8,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  plus: {
    backgroundColor: colors.Grey,
    padding: 8,
    borderRadius: 32,
  },
  addModal: {
    height: "50%",
    width: "100%",
    padding: 32,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.Grey,
    top: "50%",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  addEventContainer: {
    width: "50%",
    padding: 32,
    margin: 16,
    backgroundColor: colors.Amaranth,
  },
  inputBox: {
    width: "100%",
    color: colors.White,
    backgroundColor: colors.LightGreyOpacity02,
    margin: 4,
    padding: 6,
    borderRadius: 8,
  },
});
