import React from "react";
import WorkInProgressScreen from "../components/WorkInProgressScreen";

export default function LoseScreen({ navigation }) {
  return (
		<WorkInProgressScreen
      navigation={navigation}
      route={route}
      backgroundColor="#74736D"
      imageSource={require("../../assets/confusedkid.webp")}
      title={"INTENTA\nOTRA VEZ"}
      direction="left"
    />
  );
}
