import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/components/WorkInProgressScreen.styles";
import SoundButton from "./SoundButton";

export default function WorkInProgressScreen({
  navigation,
  title,
  description,
  testResultButtons = false,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        {testResultButtons && (
          <View style={styles.testButtonsContainer}>
            <SoundButton
              style={[styles.testButton, styles.winTestButton]}
              onPress={() => navigation.navigate("Win")}
            >
              <Text style={styles.testButtonText}>Probar victoria</Text>
            </SoundButton>

            <SoundButton
              style={[styles.testButton, styles.loseTestButton]}
              onPress={() => navigation.navigate("Lose")}
            >
              <Text style={styles.testButtonText}>Probar error</Text>
            </SoundButton>
          </View>
        )}

        <SoundButton
          style={styles.actionButton}
          onPress={() => navigation.navigate("Mode")}
        >
          <Text style={styles.actionText}>Volver a modos</Text>
        </SoundButton>
      </View>
    </SafeAreaView>
  );
}
