import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Alert,
	ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { levels } from "../data/levels";
import { imageMap } from "../data/images";
import { unlockNextLevel, addPoint, getScore } from "../services/progress";
import SoundButton from "../components/SoundButton";
import { useGameAudio } from "../audio/GameAudioProvider";

export default function LevelGameScreen({ navigation, route }) {
	const { levelId } = route.params || { levelId: 1 };
	const [level, setLevel] = useState(null);
	const [score, setScore] = useState(0);
	const { playCorrect, playIncorrect } = useGameAudio();

	useEffect(() => {
		const l = levels.find((x) => x.id === Number(levelId)) || levels[0];
		setLevel(l);
		(async () => {
			const s = await getScore();
			setScore(s);
		})();
	}, [levelId]);

	if (!level) return null;

	const images = Array.from({ length: level.quantity });

	const handleAnswer = async (value) => {
		if (value === level.quantity) {
			playCorrect();
			// correcto: incrementar puntaje y desbloquear siguiente nivel si existe
			const newScore = await addPoint();
			await unlockNextLevel(level.id);
			navigation.navigate("Win", {
				score: newScore,
				returnRoute: level.id < levels.length ? "LevelGame" : "LevelSelect",
				returnParams: level.id < levels.length ? { levelId: level.id + 1 } : undefined,
			});
		} else {
			playIncorrect();
			const s = await getScore();
			navigation.navigate("Lose", {
				score: s,
				returnRoute: "LevelGame",
				returnParams: { levelId: level.id },
			});
		}
	};

	return (
		<SafeAreaView style={styles.container}>

			<View style={styles.header}>

				<Text style={styles.title}>MODO POR NIVELES</Text>

				<Text style={styles.score}>Puntaje: {score}</Text>

			</View>

			<View style={styles.gameArea}>
				{images.map((_, index) => (
					<Image key={index} source={imageMap[level.object]} style={styles.image} />
				))}
			</View>

			<Text style={styles.question}>¿Cuántos hay?</Text>

			<View style={styles.answers}>
				{level.options.map((option) => (
					<SoundButton
						key={option}
						style={styles.answerButton}
						onPress={() => handleAnswer(option)}
					>
						<Text style={styles.answerText}>{option}</Text>
					</SoundButton>
				))}
			</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: "#FDF6E8"
	},

	header: {
		backgroundColor: "#B8DBF8",
		paddingTop: 20,
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

	image: {
		width: 80,
		height: 80,
		resizeMode: "contain",
		margin: 10,
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
	}

});
