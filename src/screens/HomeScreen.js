import React from "react";
import {
  Image,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/screens/HomeScreen.styles";
import SoundButton from "../components/SoundButton";

const logo = require("../../assets/cuantoshaylogo.png");

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.bubble, styles.bubblePink]} />
      <View style={[styles.bubble, styles.bubbleBlue]} />
      <View style={[styles.bubble, styles.bubbleGreen]} />

      <View style={styles.content}>
        <View style={styles.welcomePill}>
          <Text style={styles.welcomeText}>¡APRENDE JUGANDO!</Text>
        </View>

        <View style={styles.logoCard}>
          <Image source={logo} style={styles.logo} accessibilityLabel="Logo de Cuántos Hay" />
        </View>

        <Text style={styles.subtitle}>Mira, cuenta y elige la respuesta correcta</Text>

        <SoundButton
          accessibilityRole="button"
          accessibilityLabel="Comenzar a jugar"
          activeOpacity={0.85}
          style={styles.playButton}
          onPress={() => navigation.navigate("Mode")}
        >
          <View style={styles.playIconCircle}>
            <View style={styles.playIcon} />
          </View>
          <Text style={styles.playText}>¡VAMOS A JUGAR!</Text>
        </SoundButton>

        <View style={styles.skillsRow}>
          <View style={[styles.skillPill, styles.skillPink]}>
            <Text style={styles.skillText}>MIRA</Text>
          </View>
          <Text style={styles.skillDot}>•</Text>
          <View style={[styles.skillPill, styles.skillOrange]}>
            <Text style={styles.skillText}>CUENTA</Text>
          </View>
          <Text style={styles.skillDot}>•</Text>
          <View style={[styles.skillPill, styles.skillBlue]}>
            <Text style={styles.skillText}>APRENDE</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
