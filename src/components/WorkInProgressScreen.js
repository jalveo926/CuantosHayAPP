import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/components/WorkInProgressScreen.styles";

export default function WorkInProgressScreen({ navigation, title, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Mode")}
        >
          <Text style={styles.actionText}>Volver a modos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
