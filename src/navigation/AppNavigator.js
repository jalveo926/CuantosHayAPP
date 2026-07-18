import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ModeScreen from "../screens/ModeScreen";
import LevelSelectScreen from "../screens/LevelSelectScreen";
import LevelGameScreen from "../screens/LevelGameScreen";
import InfiniteGameScreen from "../screens/InfiniteGameScreen";
import WinScreen from "../screens/WinScreen";
import LoseScreen from "../screens/LoseScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Persona 1: interfaz principal */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mode" component={ModeScreen} />

        {/* Persona 2: modo niveles */}
        <Stack.Screen name="LevelSelect" component={LevelSelectScreen} />
        <Stack.Screen name="LevelGame" component={LevelGameScreen} />

        {/* Persona 3: modo infinito */}
        <Stack.Screen name="InfiniteGame" component={InfiniteGameScreen} />

        {/* Resultado común */}
        <Stack.Screen name="Win" component={WinScreen} />
        <Stack.Screen name="Lose" component={LoseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}