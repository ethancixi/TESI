import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import TextCoiny from "../../../components/Text/TextCoiny";
import TextRoboto from "../../../components/Text/TextRoboto";
import container from "../../../styles/container";
import verticalContainer from "../../../styles/verticalContainer";
import horizontalContainer from "../../../styles/horizontalContainer";
import ButtonRed from "../../../components/buttons/ButtonRed";

import colors from "../../../constants/colors";
import { categories } from "../../../constants/categories";
import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_FIRESTORE } from "../../../firebaseConfig";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";

export default function AddEvent() {
  const [NameEvent, setNameEvent] = useState("");
  const [Organizer, setOrganizer] = useState("");
  const [Description, setDescription] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [LatLong, setLatLong] = useState({ latitude: "", longitude: "" });

  const [filters, setfilters] = useState(new Array(categories.length).fill(""));

  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const handleChange = (position) => {
    const newFilters = filters.map((element, i) => {
      if (i === position) {
        if (element === "") {
          return categories[i];
        }
        return "";
      }
      return element;
    });
    setfilters(newFilters);
  };

  const firestore = FIREBASE_FIRESTORE;

  const formSubmit = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "events"), {
        NameEvent: NameEvent,
        Organizer: Organizer,
        Description: Description,
        Telephone: Telephone,
        email: email,
        filters: filters,
        date: date,
        LatLong: LatLong,
      });
      console.log("Document written with ID: ", docRef.id);
      router.push("/main/views/Map");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
        <View style={verticalContainer.verticalContainer}>
          <TextCoiny
            text={"StepUp"}
            color={colors.OffWhite}
            size={48}
            style={styles.textShadowTitle}
          />
          <TextCoiny
            text={"Aggiungi un Evento!"}
            color={colors.OffWhite}
            size={24}
            style={styles.textShadowTitle}
          />
        </View>
      </View>

      <ScrollView style={styles.ScrollView}>
        <TextInput
          placeholder="Nome dell'evento"
          placeholderTextColor={colors.LightGrey}
          onChangeText={(newNameEvent) => setNameEvent(newNameEvent)}
          defaultValue={NameEvent}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Ente Organizzatore"
          placeholderTextColor={colors.LightGrey}
          onChangeText={(newOrganizer) => setOrganizer(newOrganizer)}
          defaultValue={Organizer}
          style={styles.inputBox}
        />
        <View style={styles.categoryContainer}>
          <TextRoboto text={"Categoria"} color={colors.White} size={16} />
          <ScrollView horizontal={true}>
            {categories.map((element, i) => (
              <Pressable onPress={() => handleChange(i)}>
                <View
                  style={
                    filters[i] === "" ? styles.category : styles.categoryChecked
                  }
                >
                  <TextRoboto
                    text={element}
                    color={filters[i] === "" ? colors.Black : colors.White}
                    key={i}
                  />
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            ...horizontalContainer.horizontalContainer,
            ...{ justifyContent: "space-between", marginVertical: 16 },
          }}
        >
          <TextRoboto text={"Data"} color={colors.White} size={16} />
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
          />
          <Image
            source={require("../../../assets/icons/calendar-days.png")}
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
            ...{ justifyContent: "space-between", marginVertical: 16 },
          }}
        >
          <TextRoboto text={"Ora"} color={colors.White} size={16} />
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"time"}
            is24Hour={true}
            onChange={onChange}
          />
          <Image
            source={require("../../../assets/icons/clock.png")}
            style={{
              objectFit: "contain",
              height: 24,
              width: 24,
            }}
          />
        </View>
        <View style={{ ...container.container, ...{ marginVertical: 8 } }}>
          <TextRoboto
            text={date.toLocaleString()}
            color={colors.White}
            size={16}
          />
        </View>
        <View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(newDescription) => setDescription(newDescription)}
            placeholder="Descrizione dell'evento"
            placeholderTextColor={colors.LightGrey}
            defaultValue={Description}
            style={styles.inputBox}
          />
        </View>
        <View
          style={{
            ...horizontalContainer.horizontalContainer,
            ...{ justifyContent: "space-between", marginVertical: 16 },
          }}
        >
          <TextRoboto
            text={"Luogo dell'evento"}
            color={colors.White}
            size={16}
          />
          <Image
            source={require("../../../assets/icons/map-pin.png")}
            style={{
              objectFit: "contain",
              height: 24,
              width: 24,
            }}
          />
        </View>
        <View>
          <TextRoboto
            text={"Aggiungi contatti"}
            color={colors.White}
            size={16}
          />
          <TextInput
            placeholder="Inserisci un numero di telefono"
            placeholderTextColor={colors.LightGrey}
            onChangeText={(newTelephone) => setTelephone(newTelephone)}
            defaultValue={Telephone}
            style={styles.inputBox}
            inputMode="numeric"
          />
          <TextInput
            placeholder="inserisci una email di contatto"
            placeholderTextColor={colors.LightGrey}
            onChangeText={(newEmail) => setEmail(newEmail)}
            defaultValue={NameEvent}
            style={styles.inputBox}
            inputMode="email"
          />
        </View>
        <View style={{ alignItems: "flex-end", marginVertical: 16 }}>
          <ButtonRed text={"Aggiungi Evento"} func={formSubmit} />
        </View>
      </ScrollView>

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
  textAbsoluteIOS: {
    position: "absolute",
    top: "5%",
  },
  textAbsoluteAND: {
    position: "absolute",
    top: "2%",
  },
  categoryContainer: {
    gap: 16,
    marginVertical: 16,
  },
  category: {
    backgroundColor: colors.LightGrey,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: colors.Grey,
  },
  categoryChecked: {
    backgroundColor: colors.LightGrey,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 4,
    borderWidth: 2,
    backgroundColor: colors.Amaranth,
    borderColor: colors.LightGrey,
  },
  inputBox: {
    width: "100%",
    color: colors.White,
    backgroundColor: colors.LightGreyOpacity02,
    marginVertical: 8,
    padding: 6,
    borderRadius: 8,
  },
  ScrollView: {
    marginVertical: "35%",
    width: "90%",
  },
});
