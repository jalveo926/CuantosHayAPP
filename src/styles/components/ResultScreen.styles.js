import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  colorPanel: {
    position: "absolute",
    top: -210,
    alignSelf: "center",
    width: "155%",
    height: 520,
    borderBottomLeftRadius: 900,
    borderBottomRightRadius: 900,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: "15%",
  },
  illustration: {
    width: 245,
    height: 245,
    resizeMode: "contain",
  },
  title: {
    marginTop: 42,
    color: "#050505",
    fontSize: 29,
    fontWeight: "900",
    lineHeight: 34,
    textAlign: "center",
  },
  button: {
    width: 70,
    height: 70,
    marginTop: 44,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  winButton: {
    backgroundColor: "#FFD33D",
  },
  loseButton: {
    backgroundColor: "#000000",
  },
  arrowShaft: {
    position: "absolute",
    width: 34,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
  },
  arrowHead: {
    position: "absolute",
    width: 22,
    height: 22,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderColor: "#FFFFFF",
  },
  arrowHeadRight: {
    right: 17,
    transform: [{ rotate: "45deg" }],
  },
  arrowHeadLeft: {
    left: 17,
    transform: [{ rotate: "-135deg" }],
  },
  scoreTitle: {
    fontSize: 22,
    color: "#555",
    marginTop: 15,
    fontWeight: "600",
  },

  score: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#F39C12",
    marginBottom: 15,
  },

  message: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    marginHorizontal: 30,
    marginBottom: 30,
    fontWeight: "600",
  },
  menuButton: {
    marginTop: 16,
    width: 140,
    height: 46,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  menuText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#3F3F3F",
  },
});

export default styles;
