import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/screens/ModeScreen.styles";

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
