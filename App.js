import AppNavigator from "./src/navigation/AppNavigator";
import { GameAudioProvider } from "./src/audio/GameAudioProvider";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GameAudioProvider>
        <AppNavigator />
      </GameAudioProvider>
    </SafeAreaProvider>
  );
}
