import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function ModeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>ELIGE UN MODO</Text>

      {/* Botón Infinito */}
      <TouchableOpacity
        style={[styles.button, styles.infinite]}
        onPress={() => navigation.navigate("InfiniteGame")}
      >
        <Text style={styles.icon}>∞</Text>
        <Text style={styles.buttonText}>Infinito</Text>
      </TouchableOpacity>

      {/* Botón Niveles */}
      <TouchableOpacity
        style={[styles.button, styles.levels]}
        onPress={() => navigation.navigate("LevelSelect")}
      >
        <Text style={styles.icon}>⚑</Text>
        <Text style={styles.buttonText}>Niveles</Text>
      </TouchableOpacity>

      

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 50,
  },

  button: {
    width: "85%",
    height: 90,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    elevation: 5,
  },

  infinite: {
    backgroundColor: "#C996F5",
  },

  levels: {
    backgroundColor: "#75D86A",
  },

  icon: {
    fontSize: 40,
    marginBottom: 5,
  },

  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
  },

  character: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
  },

});