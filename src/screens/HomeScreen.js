import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>¿CUÁNTOS HAY?</Text>

      {/* Animales decorativos */}


      {/* Botón */}

      <TouchableOpacity
        style={styles.playButton}
        onPress={() => navigation.navigate("Mode")}
      >
        <Text style={styles.playIcon}>▶</Text>
      </TouchableOpacity>

      <Text style={styles.playText}>JUGAR</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF6CC",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    position: "absolute",
    top: 70,
    fontSize: 34,
    fontWeight: "bold",
  },

  playButton: {
    width: 120,
    height: 120,
    backgroundColor: "#FFD54A",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  playIcon: {
    fontSize: 55,
    color: "#fff",
  },

  playText: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },

  animal: {
    position: "absolute",
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  zebra: {
    top: 30,
    left: 10,
  },

  lion: {
    top: 180,
    right: 20,
  },

  giraffe: {
    bottom: 80,
    right: 5,
  },

  cow: {
    bottom: 20,
    left: 20,
  },

});