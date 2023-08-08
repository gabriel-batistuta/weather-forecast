import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import WeatherComponent from "./src/components/weather";

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
});
