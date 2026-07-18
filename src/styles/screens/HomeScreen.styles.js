import { StyleSheet } from "react-native";
import { colors } from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.homeBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    top: 70,
    fontSize: 34,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  playButton: {
    width: 120,
    height: 120,
    backgroundColor: colors.primaryYellow,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  playIcon: {
    fontSize: 55,
    color: colors.white,
  },
  playText: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  animal: {
    position: "absolute",
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  zebra: {
    top: 30,
    left: 10,
  },
  lion: {
    top: 180,
    right: 20,
  },
  giraffe: {
    bottom: 80,
    right: 5,
  },
  cow: {
    bottom: 20,
    left: 20,
  },
});

export default styles;
