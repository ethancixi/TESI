import { Link, Tabs, useRouter } from "expo-router";
import React from "react";

import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import container from "../../../styles/container";

export default function Profile() {
  return (
    <View style={container.container}>
      <Text>Profilo!</Text>
    </View>
  );
}

// options={{
//   title: "Profile screen",
//   headerShown: false,
//   tabBarIcon: () => (
//     <View
//       style={
//         Platform.OS === "ios"
//           ? styles.centeredIconIOS
//           : styles.centeredIconAND
//       }
//     >
//       <Link href={"/Profile"} asChild>
//         <TouchableOpacity>
//           <Image source={require("../../../assets/icons/user.png")} />
//         </TouchableOpacity>
//       </Link>
//     </View>
//   ),
// }}

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
