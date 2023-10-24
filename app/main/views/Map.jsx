import React from "react";
import { Link, Tabs } from "expo-router";
import {
  Image,
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import container from "../../../styles/container";

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
      <Text>Map Screen</Text>
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
});
