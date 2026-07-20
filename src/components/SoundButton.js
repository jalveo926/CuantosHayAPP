import React from "react";
import { TouchableOpacity } from "react-native";
import { useGameAudio } from "../audio/GameAudioProvider";

export default function SoundButton({ onPress, disabled, ...props }) {
  const { playButton } = useGameAudio();

  const handlePress = (event) => {
    playButton();
    onPress?.(event);
  };

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      onPress={disabled ? undefined : handlePress}
    />
  );
}
