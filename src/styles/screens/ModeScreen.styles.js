import { StyleSheet } from "react-native";
import { colors } from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.modeBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 50,
    color: colors.textPrimary,
  },
  button: {
    width: "85%",
    height: 90,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    elevation: 5,
  },
  infinite: {
    backgroundColor: colors.infinitePurple,
  },
  levels: {
    backgroundColor: colors.levelsGreen,
  },
  icon: {
    fontSize: 40,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  character: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
