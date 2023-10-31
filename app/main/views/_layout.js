import { Tabs, Link } from "expo-router";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "../../../constants/colors.js";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="Map"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 48,
          right: 32,
          left: 32,
          borderRadius: 16,
          height: 64,
          ...styles.shadow,
          backgroundColor: colors.Grey,
        },
      }}
    >
      <Tabs.Screen
        name="Inbox"
        options={{
          tabBarIcon: () => (
            <View
              style={
                Platform.OS === "ios"
                  ? styles.centeredIconIOS
                  : styles.centeredIconAND
              }
            >
              <Image
                source={require("../../../assets/icons/inbox-stack.png")}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen name="Map" />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: () => (
            <View
              style={
                Platform.OS === "ios"
                  ? styles.centeredIconIOS
                  : styles.centeredIconAND
              }
            >
              <Image source={require("../../../assets/icons/user.png")} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="AddEvent"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Details"
        options={{
          href: null,
        }}
      />
    </Tabs>
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
  centralTabBarButton: {
    alignItems: "center",
    justifyContent: "center",
    top: -16,
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
});
