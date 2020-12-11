import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.centered}>
      <Text>Main Screen</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
