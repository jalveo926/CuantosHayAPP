import React from "react";
import WorkInProgressScreen from "../components/WorkInProgressScreen";

export default function LevelGameScreen({ navigation }) {
	return (
		<WorkInProgressScreen
			navigation={navigation}
			title="Juego por Niveles"
			description="Base lista para Persona 2: aqui va la logica de juego por nivel y avance."
		/>
	);
}
