import React from "react";
import {
  Image,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/components/ResultScreen.styles";
import SoundButton from "./SoundButton";

export default function ResultScreen({
  navigation,
  route,
  backgroundColor,
  imageSource,
  title,
  direction,
}) {

  const score = route?.params?.score ?? 0;
  const returnRoute = route?.params?.returnRoute || "Mode";
  const returnParams = route?.params?.returnParams;
  function getMessage(score) {
    if (score <= 3) return "¡Puedes hacerlo!";
    if (score <= 7) return "¡Muy bien!";
    if (score <= 12) return "¡Excelente trabajo!";
    return "¡Eres un campeón!";
  }

  const returnToGame = () => {
    navigation.replace(returnRoute, returnParams);
  };

  const goToMenu = () => {
    const isInfinite = route?.params?.fromMode === "infinite";
    navigation.replace(isInfinite ? "Mode" : "LevelSelect");
  };

  return (

    <SafeAreaView style={styles.screen}>

      <View
        style={[
          styles.colorPanel,
          { backgroundColor }
        ]}
      />

      <View style={styles.content}>

        <Image
          source={imageSource}
          style={styles.illustration}
        />

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.scoreTitle}>
          Puntaje
        </Text>

        <Text style={styles.score}>
          {score}
        </Text>

        <Text style={styles.message}>
          {getMessage(score)}
        </Text>


        <SoundButton
          accessibilityRole="button"
          accessibilityLabel={direction === "right" ? "Continuar" : "Intentar otra vez"}
          activeOpacity={0.8}
          onPress={returnToGame}
          style={[styles.button, direction === "right" ? styles.winButton : styles.loseButton]}
        >

          <View style={styles.arrowShaft} />

          <View
            style={[
              styles.arrowHead,
              direction === "right" ? styles.arrowHeadRight : styles.arrowHeadLeft,
            ]}
          />

        </SoundButton>

        <SoundButton
          accessibilityRole="button"
          accessibilityLabel="Menu"
          activeOpacity={0.8}
          onPress={goToMenu}
          style={[styles.menuButton]}
        >
          <Text style={styles.menuText}>Menu</Text>
        </SoundButton>

      </View>

    </SafeAreaView>

  );

}
