import React from "react";
import WorkInProgressScreen from "../components/WorkInProgressScreen";

export default function WinScreen({ navigation }) {
	return (
		<WorkInProgressScreen
			navigation={navigation}
			title="Pantalla de Victoria"
			description="Pantalla comun lista como base. Se puede personalizar cuando se conecte con cada modo."
		/>
	);
}
