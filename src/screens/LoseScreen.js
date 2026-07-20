import React from "react";
import ResultScreen from "../components/ResultScreen";

export default function LoseScreen({ navigation, route }) {

    return (

        <ResultScreen
            navigation={navigation}
            route={route}
            backgroundColor="#74736D"
            imageSource={require("../../assets/confusedkid.webp")}
            title={"INTENTA\nOTRA VEZ"}
            direction="left"
        />

    );

}