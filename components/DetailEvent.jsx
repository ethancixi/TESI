import React from "react";

import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import container from "../styles/container";
import colors from "../constants/colors";
import verticalContainer from "../styles/verticalContainer";
import horizontalContainer from "../styles/horizontalContainer";
import TextRoboto from "../components/Text/TextRoboto";

export default function DetailEvent({ event }) {
  let date = new Date(event.date.seconds);
  return (
    <View style={{ ...styles.detailEvent, ...styles.shadow }}>
      <View
        style={{
          ...horizontalContainer.horizontalContainer,
          ...{ columnGap: 8, justifyContent: "space-around", width: "100%" },
        }}
      >
        <View style={styles.infos}>
          <TextRoboto text={event.NameEvent} color={colors.White} size={20} />
          <TextRoboto
            text={event.Organizer}
            color={colors.LightGrey}
            size={20}
          />
          <TextRoboto
            text={date.toLocaleString()}
            color={colors.LightGreyOpacity02}
            size={20}
          />
        </View>
        <View
          style={{
            ...verticalContainer.verticalContainer,
            ...{ rowGap: 8 },
          }}
        >
          <Pressable>
            <Image
              source={require("../assets/icons/heartvoid.png")}
              style={{
                objectFit: "contain",
                height: 24,
                width: 24,
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("../assets/icons/calendar-days.png")}
              style={{
                objectFit: "contain",
                height: 24,
                width: 24,
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require("../assets/icons/share.png")}
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
  );
}

const styles = StyleSheet.create({
  detailEvent: {
    backgroundColor: colors.Grey,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Grey,
    padding: 8,
    marginVertical: 8,
    borderRadius: 32,
    minHeight: 128,
    borderWidth: 2,
    borderColor: colors.LightGreyOpacity02,
  },
  infos: {
    flexDirection: "column",
    justifyContent: "flex-start",
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
});
