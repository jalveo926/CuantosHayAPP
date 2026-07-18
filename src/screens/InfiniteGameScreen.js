import React from "react";
import WorkInProgressScreen from "../components/WorkInProgressScreen";

export default function InfiniteGameScreen({ navigation }) {
	return (
		<WorkInProgressScreen
			navigation={navigation}
			title="Modo Infinito"
			description="Base lista para Persona 3: aqui va la generacion aleatoria y puntuacion continua."
		/>
	);
}
