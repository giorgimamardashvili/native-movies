import React from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-web";
import Movie from "./Movie";
import { key } from "../../vars";
import MovieItem from "../components/MovieItem";

export default function Home() {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${key}`
    );
    console.log(response);
    setMovies(() => response.data.results);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {movies &&
          movies.map((movie, index) => <MovieItem key={index} data={movie} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "grid",
    gridTemplateColumns: "1fr",
    gridGap: 20,
    backgroundColor: "#000",
    padding: "15px",
  },
});
