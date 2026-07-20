import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
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
      navigation.navigate("Lose", {
        score: getScore(),
        returnRoute: "InfiniteGame",
        fromMode: "infinite",
      });
    }

  }

  if (!game) return null;

  return (

    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <Text style={styles.title}>
          MODO INFINITO
        </Text>

        <Text style={styles.score}>
          Puntaje: {score}
        </Text>

      </View>

      {/* AREA DE LOS OBJETOS */}

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
          game.options.map(option => (

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
    backgroundColor: "#FDF6E8"
  },

  header: {
    backgroundColor: "#B8DBF8",
    paddingTop: 55,
    paddingBottom: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 6
  },

  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#000"
  },

  score: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8
  },

  gameArea: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 20
  },

  emoji: {
    fontSize: 70,
    margin: 12
  },

  question: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25
  },

  answers: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 35,
    paddingHorizontal: 10
  },

  answerButton: {
    width: 80,
    height: 80,
    backgroundColor: "#ECECEC",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4
  },

  answerText: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000"
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    margin: 10,
	},

});