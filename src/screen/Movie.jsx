import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Movie({ route }) {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.data.name}</Text>
      <Text style={styles.released}>Released {route.params.data.released}</Text>
      <Image source={route.params.data.background_image} style={styles.image} />
      <Text style={styles.released}>
        Last modifide {route.params.data.updated}
      </Text>
      <Text style={styles.released}>
        Rating {route.params.data.rating}/{route.params.data.rating_top}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    overflow: "hidden",
    width: "100%",
    minHeight: "100vh",
    padding: "16px",
  },
  image: {
    width: "100%",
    aspectRatio: "3 / 2",
  },
  title: {
    color: "white",
    fontSize: "28px",
    textAlign: "center",
  },
  released: {
    color: "hsla(0,0%,100%,.4)",
    fontSize: "16px",
    textAlign: "center",
  },
});
