import React from "react";
import WorkInProgressScreen from "../components/WorkInProgressScreen";

export default function LevelSelectScreen({ navigation }) {
	return (
		<WorkInProgressScreen
			navigation={navigation}
			title="Seleccion de Niveles"
			description="Base lista para Persona 2: aqui va la lista de niveles, bloqueo/desbloqueo y progreso."
		/>
	);
}
