import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/components/WorkInProgressScreen.styles";

export default function WorkInProgressScreen({
  navigation,
  title,
  description,
  testResultButtons = false,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        {testResultButtons && (
          <View style={styles.testButtonsContainer}>
            <TouchableOpacity
              style={[styles.testButton, styles.winTestButton]}
              onPress={() => navigation.navigate("Win")}
            >
              <Text style={styles.testButtonText}>Probar victoria</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.testButton, styles.loseTestButton]}
              onPress={() => navigation.navigate("Lose")}
            >
              <Text style={styles.testButtonText}>Probar error</Text>
            </TouchableOpacity>
          </View>
        )}

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
