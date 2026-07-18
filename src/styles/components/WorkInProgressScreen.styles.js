import { StyleSheet } from "react-native";
import { colors } from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.modeBackground,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: colors.primaryYellow,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
  },
});

export default styles;
