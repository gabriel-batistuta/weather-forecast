import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const WeatherComponent = () => {
  // imageSource, graus, weather

  const imageSource = require("../assets/nublado.jpg");
  const graus = "37";

  return (
    <View>
      <Image source={imageSource} style={styles.img} />
      <Text style={styles.text}>{graus}°</Text>
      {/* <Text style={styles.text}>{weather}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    height: "100%",
  },
  mainText: {
    position: "absolute",
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default WeatherComponent;
