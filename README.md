# 🧮 ¿Cuántos Hay?

**¿Cuántos Hay?** es una aplicación móvil educativa desarrollada con **React Native** y **Expo**, diseñada para ayudar a niños en edad preescolar y primaria a desarrollar habilidades de conteo de forma divertida e interactiva.

El jugador observa un conjunto de imágenes, cuenta cuántos objetos aparecen en pantalla y selecciona la respuesta correcta entre tres opciones disponibles.

---

## 📱 Características

- 🎮 Modo de juego por niveles.
- ♾️ Modo infinito con preguntas generadas aleatoriamente.
- 🐶 Diferentes categorías de imágenes (animales, frutas, juguetes, etc.).
- 🎨 Interfaz amigable para niños.
- 🔊 Efectos de sonido y animaciones.
- ⭐ Sistema de progreso por niveles.
- 💾 Guardado del progreso local.

---

## 📂 Estructura del proyecto

```
CuantosHay/
│
├── assets/
│   ├── animals/
│   ├── backgrounds/
│   ├── icons/
│   ├── sounds/
│   └── fonts/
│
├── src/
│   ├── components/
│   ├── constants/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── styles/
│   └── utils/
│
├── App.js
├── package.json
└── app.json
```

---

## 🚀 Tecnologías utilizadas

- React Native
- Expo
- React Navigation
- Expo AV
- Expo Font
- Async Storage
- React Native Reanimated

---

## 📦 Instalación

Clonar el repositorio

```bash
git clone https://github.com/usuario/CuantosHay.git
```

Entrar al proyecto

```bash
cd CuantosHay
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npx expo start
```

---

## 📚 Dependencias principales

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack

npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-reanimated
npx expo install expo-av
npx expo install expo-font
npx expo install @react-native-async-storage/async-storage
```

---

## 🕹️ Flujo de navegación

```
Inicio
   │
   ▼
Seleccionar modo
   │
   ├───────────────┐
   │               │
   ▼               ▼
Niveles       Modo infinito
   │               │
   ▼               ▼
Juego          Juego
   │               │
   ├───────┐       ├───────┐
   ▼       ▼       ▼       ▼
Ganó    Perdió   Ganó   Perdió
```

---

## 🎯 Objetivo del juego

El jugador deberá observar cuidadosamente los objetos mostrados en pantalla, contarlos y seleccionar la cantidad correcta entre tres opciones.

El objetivo es reforzar habilidades matemáticas básicas, mejorar la atención visual y fomentar el aprendizaje mediante la interacción.

---

## 🔮 Funcionalidades futuras

- Nuevas categorías de imágenes.
- Más niveles de dificultad.
- Cronómetro por partida.
- Sistema de recompensas.
- Estadísticas de progreso.
- Música de fondo configurable.
- Soporte para múltiples idiomas.

---

## 👨‍💻 Autores

**Jesús Alveo**

Estudiante de Licenciatura en Desarrollo y Gestión de Software.

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje utilizando React Native y Expo.