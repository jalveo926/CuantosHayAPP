import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { imageMap } from "../data/images";
import { generateGame } from "../services/gameGenerator";
import { addPoint, getScore, resetScore } from "../utils/score";

export default function InfiniteGameScreen({ navigation }) {

  const [game, setGame] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    resetScore();
    nextQuestion();
  }, []);

  function nextQuestion() {
    setGame(generateGame());
  }

  function checkAnswer(answer) {

    if (answer === game.correctAnswer) {

      const newScore = addPoint();
      setScore(newScore);

      setTimeout(() => {
        nextQuestion();
      }, 400);

    } else {

      navigation.replace("Lose", {
        score: getScore(),
        returnRoute: "InfiniteGame",
      });

    }

  }

  function finishGame() {

    Alert.alert(
      "Finalizar partida",
      `¿Deseas terminar la partida?\n\nPuntaje actual: ${getScore()}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Finalizar",
          onPress: () => {

            navigation.replace("Win", {
              score: getScore(),
              returnRoute: "InfiniteGame",
            });

          },
        },
      ]
    );

  }

  if (!game) return null;

  return (

    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

          <Text style={styles.title}>
              MODO INFINITO
          </Text>

          <View style={styles.headerBottom}>

              <Text style={styles.score}>
                  ⭐ Puntaje: {score}
              </Text>

              <TouchableOpacity
                  style={styles.exitButton}
                  onPress={finishGame}
              >
                  <Text style={styles.exitText}>
                      Salir
                  </Text>
              </TouchableOpacity>

          </View>

      </View>

      {/* OBJETOS */}

      <View style={styles.gameArea}>

        {

          Array.from({ length: game.quantity }).map((_, index) => (

            <Image
              key={index}
              source={imageMap[game.object]}
              style={styles.image}
            />

          ))

        }

      </View>

      {/* PREGUNTA */}

      <Text style={styles.question}>
        ¿Cuántos hay?
      </Text>

      {/* RESPUESTAS */}

      <View style={styles.answers}>

        {

          game.options.map((option) => (

            <TouchableOpacity
              key={option}
              style={styles.answerButton}
              onPress={() => checkAnswer(option)}
            >

              <Text style={styles.answerText}>
                {option}
              </Text>

            </TouchableOpacity>

          ))

        }

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FDF6E8",
  },

  header: {
    backgroundColor: "#B8DBF8",
    paddingTop: 55,
    paddingBottom: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 6,
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#000",
  },

  score: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },

  exitButton: {
    position: "absolute",
    right: 15,
    top: 70,
    backgroundColor: "#EF5350",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    zIndex: 10,
  },

  exitText: {

    color: "#FFF",

    fontSize: 18,

    fontWeight: "bold",

  },

  gameArea: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    margin: 8,
  },

  question: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },

  answers: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 35,
    paddingHorizontal: 10,
  },

  answerButton: {
    width: 85,
    height: 85,
    backgroundColor: "#ECECEC",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  answerText: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000",
  },

});