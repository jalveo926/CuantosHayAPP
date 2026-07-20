import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/screens/ModeScreen.styles";

const logo = require("../../assets/cuantoshaylogo.png");

export default function ModeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.decoration, styles.decorationTop]} />
      <View style={[styles.decoration, styles.decorationBottom]} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Volver al inicio"
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <Image source={logo} style={styles.logo} accessibilityLabel="Logo de Cuántos Hay" />
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.eyebrow}>¡PREPÁRATE PARA CONTAR!</Text>
          <Text style={styles.title}>¿CÓMO QUIERES JUGAR?</Text>
          <Text style={styles.subtitle}>Elige una aventura para comenzar</Text>
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Jugar modo infinito"
          activeOpacity={0.86}
          style={[styles.modeCard, styles.infiniteCard]}
          onPress={() => navigation.navigate("InfiniteGame")}
        >
          <View style={[styles.iconCircle, styles.infiniteIconCircle]}>
            <Text style={styles.infinityIcon}>∞</Text>
          </View>
          <View style={styles.cardCopy}>
            <Text style={styles.cardTitle}>MODO INFINITO</Text>
            <Text style={styles.cardDescription}>Cuenta sin parar y supera tu récord</Text>
          </View>
          <View style={styles.cardArrowCircle}>
            <Text style={styles.cardArrow}>›</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Jugar por niveles"
          activeOpacity={0.86}
          style={[styles.modeCard, styles.levelsCard]}
          onPress={() => navigation.navigate("LevelSelect")}
        >
          <View style={[styles.iconCircle, styles.levelsIconCircle]}>
            <Text style={styles.numberIcon}>1 2 3</Text>
          </View>
          <View style={styles.cardCopy}>
            <Text style={styles.cardTitle}>POR NIVELES</Text>
            <Text style={styles.cardDescription}>Avanza paso a paso y gana medallas</Text>
          </View>
          <View style={styles.cardArrowCircle}>
            <Text style={styles.cardArrow}>›</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.tipCard}>
          <View style={styles.starBadge}>
            <Text style={styles.star}>★</Text>
          </View>
          <Text style={styles.tipText}>¡Cada respuesta correcta te hace un gran contador!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
