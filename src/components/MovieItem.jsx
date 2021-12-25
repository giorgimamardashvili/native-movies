import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MovieItem({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Movie", { data })}
    >
      <Image source={data.background_image} style={styles.image} />
      <Text style={styles.text}>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    backgroundColor: "#202020",
    borderRadius: "12px",
    boxShadow: "0 10px 20px 0 rgb(0 0 0 / 7%)",
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: "3 / 2",
  },
  text: {
    padding: "16px",
    color: "white",
    fontSize: "20px",
  },
});
