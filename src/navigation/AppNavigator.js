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
          headerShown: false
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Mode"
          component={ModeScreen}
        />
        { // Aquí se han comentado las pantallas de juego y resultados para que no aparezcan en la navegación
        }
{/* 
        <Stack.Screen
          name="LevelSelect"
          component={LevelSelectScreen}
        />

        <Stack.Screen
          name="LevelGame"
          component={LevelGameScreen}
        />

        <Stack.Screen
          name="InfiniteGame"
          component={InfiniteGameScreen}
        />

        <Stack.Screen
          name="Win"
          component={WinScreen}
        />

        <Stack.Screen
          name="Lose"
          component={LoseScreen}
        /> */}

      </Stack.Navigator>

    </NavigationContainer>
  );
}