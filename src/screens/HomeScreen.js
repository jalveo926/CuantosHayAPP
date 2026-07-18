import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/screens/HomeScreen.styles";

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
