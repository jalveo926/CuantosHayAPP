import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/components/ResultScreen.styles";

export default function ResultScreen({
  navigation,
  route,
  backgroundColor,
  imageSource,
  title,
  direction,
}) {
  const returnToGame = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    const returnRoute = route?.params?.returnRoute;
    navigation.replace(returnRoute || "Mode", route?.params?.returnParams);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.colorPanel, { backgroundColor }]} />

      <View style={styles.content}>
        <Image source={imageSource} style={styles.illustration} />

        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={direction === "right" ? "Continuar" : "Intentar otra vez"}
          activeOpacity={0.8}
          onPress={returnToGame}
          style={[
            styles.button,
            direction === "right" ? styles.winButton : styles.loseButton,
          ]}
        >
          <View style={styles.arrowShaft} />
          <View
            style={[
              styles.arrowHead,
              direction === "right"
                ? styles.arrowHeadRight
                : styles.arrowHeadLeft,
            ]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
