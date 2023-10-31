import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  Platform,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from "react-native";
import container from "../../../styles/container";
import verticalContainer from "../../../styles/verticalContainer";
import colors from "../../../constants/colors";
import DetailEvent from "../../../components/DetailEvent";
import TextCoiny from "../../../components/Text/TextCoiny";
import TextRoboto from "../../../components/Text/TextRoboto";

import { findEvents } from "../../../hooks/getEvents";
import { FIREBASE_FIRESTORE } from "../../../firebaseConfig";

export default function Inbox() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const res = await findEvents();

    setEvents([...res]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const firestore = FIREBASE_FIRESTORE;

  return (
    <View
      style={{ ...container.container, ...{ backgroundColor: colors.Grey } }}
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
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.Amaranth}
          style={{ margin: 64 }}
        />
      ) : (
        <ScrollView style={styles.ScrollView}>
          {events.map((event, i) => (
            <DetailEvent event={event} key={i} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textAbsoluteIOS: {
    position: "absolute",
    top: "5%",
  },
  textAbsoluteAND: {
    position: "absolute",
    top: "2%",
  },
  ScrollView: {
    marginVertical: "35%",
    width: "90%",
  },
});
