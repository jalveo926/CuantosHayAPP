import React from "react";
import ResultScreen from "../components/ResultScreen";

export default function WinScreen({ navigation, route }) {
  return (
    <ResultScreen
      navigation={navigation}
      route={route}
      backgroundColor="#FFD93D"
      imageSource={require("../../assets/medalla.png")}
      title={"FELICIDADES\nSIGUE ASÍ"}
      direction="right"
    />
  );
}
