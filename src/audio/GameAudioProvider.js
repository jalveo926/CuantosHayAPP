import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { AppState } from "react-native";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";

const AudioContext = createContext(null);

const backgroundMusic = require("../../assets/backgroundmusic.mp3");
const buttonSound = require("../../assets/popbuttonsound.mp3");
const correctSound = require("../../assets/correctsound.mp3");
const incorrectSound = require("../../assets/incorrectsound.mp3");

export function GameAudioProvider({ children }) {
  const backgroundPlayer = useAudioPlayer(backgroundMusic);
  const buttonPlayer = useAudioPlayer(buttonSound);
  const correctPlayer = useAudioPlayer(correctSound);
  const incorrectPlayer = useAudioPlayer(incorrectSound);
  const pausedAfterMistake = useRef(false);

  useEffect(() => {
    backgroundPlayer.loop = true;
    backgroundPlayer.volume = 0.40;
    buttonPlayer.volume = 0.35;
    correctPlayer.volume = 0.42;
    incorrectPlayer.volume = 1.00;

    setAudioModeAsync({ playsInSilentMode: true })
      .then(() => backgroundPlayer.play())
      .catch(() => {});
  }, [backgroundPlayer, buttonPlayer, correctPlayer, incorrectPlayer]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        if (!pausedAfterMistake.current) backgroundPlayer.play();
      } else {
        backgroundPlayer.pause();
      }
    });

    return () => subscription.remove();
  }, [backgroundPlayer]);

  const replay = useCallback(async (player) => {
    try {
      await player.seekTo(0);
      player.play();
    } catch {
      // El audio no debe impedir que el juego responda al toque.
    }
  }, []);

  const resumeBackground = useCallback(() => {
    pausedAfterMistake.current = false;
    if (!backgroundPlayer.playing) backgroundPlayer.play();
  }, [backgroundPlayer]);

  const playButton = useCallback(() => {
    resumeBackground();
    return replay(buttonPlayer);
  }, [buttonPlayer, replay, resumeBackground]);

  const playIncorrect = useCallback(() => {
    pausedAfterMistake.current = true;
    backgroundPlayer.pause();
    return replay(incorrectPlayer);
  }, [backgroundPlayer, incorrectPlayer, replay]);

  const value = useMemo(
    () => ({
      playButton,
      playCorrect: () => replay(correctPlayer),
      playIncorrect,
    }),
    [correctPlayer, playButton, playIncorrect, replay]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useGameAudio() {
  const audio = useContext(AudioContext);
  if (!audio) throw new Error("useGameAudio debe usarse dentro de GameAudioProvider");
  return audio;
}
