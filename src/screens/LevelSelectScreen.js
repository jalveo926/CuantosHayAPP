import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
} from "react-native";
import { levels } from "../data/levels";
import { imageMap } from "../data/images";
import { colors } from "../styles/theme";
import {
	getScore,
	getUnlockedLevels,
	resetProgress,
} from "../services/progress";

export default function LevelSelectScreen({ navigation }) {
	const [unlocked, setUnlocked] = useState([1]);
	const [score, setScore] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(1);

	useEffect(() => {
		let mounted = true;
		(async () => {
			const u = await getUnlockedLevels();
			const s = await getScore();
			if (mounted) {
				if (u && u.length) {
					setUnlocked(u);
					setCurrentLevel(u[u.length - 1]);
				}
				setScore(s);
			}
		})();
		return () => (mounted = false);
	}, []);

	const renderItem = ({ item }) => {
		const locked = !unlocked.includes(item.id);
		const completed = unlocked.includes(item.id) && item.id < currentLevel;
		const active = item.id === currentLevel;
		return (
			<View style={[styles.card, locked && styles.cardLocked, active && styles.cardActive]}>
				<View style={styles.cardTop}>
					<View style={[styles.objectBadge, active && styles.objectBadgeActive]}>
						<Image source={imageMap[item.object]} style={styles.image} />
					</View>
					<View style={styles.levelInfo}>
						<Text style={styles.levelTitle}>Nivel {item.id}</Text>
						<Text style={styles.levelDesc}>{item.object}</Text>
					</View>
				</View>

				<View style={styles.statusRow}>
					<Text style={[
						styles.statusText,
						completed && styles.statusCompleted,
						active && styles.statusActive,
						locked && styles.statusLocked,
					]}
					>
						{locked ? "Bloqueado" : completed ? "Completado" : active ? "Actual" : "Disponible"}
					</Text>
					{!locked && completed && <Text style={styles.completedDot}>•</Text>}
				</View>

				<TouchableOpacity
					style={[styles.playButton, locked && styles.lockedButton, active && styles.playButtonActive]}
					onPress={() => !locked && navigation.navigate("LevelGame", { levelId: item.id })}
					disabled={locked}
				>
					<Text style={styles.playText}>{locked ? "Bloqueado" : active ? "Jugar ahora" : "Jugar"}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.backButtonWrapper}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.navigate("Mode")}
				>
					<Text style={styles.backIcon}>‹</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.headerBlock}>
				<Text style={styles.headerEyebrow}>MODO POR NIVELES</Text>
				<Text style={styles.headerTitle}>Elige un nivel y avanza de a uno</Text>
				<Text style={styles.headerSubtitle}>Resuelve cada nivel para desbloquear el siguiente.</Text>
			</View>

			<View style={styles.miniHeader}>
				<Text style={styles.progressTitle}>Progreso</Text>
				<Text style={styles.progressText}>{score} puntos</Text>
			</View>

			<FlatList
				data={levels}
				keyExtractor={(i) => String(i.id)}
				numColumns={2}
				contentContainerStyle={styles.list}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
			/>

			<TouchableOpacity
				style={styles.resetButton}
				onPress={async () => {
					await resetProgress();
					const u = await getUnlockedLevels();
					setUnlocked(u);
					setCurrentLevel(u[u.length - 1]);
					setScore(0);
				}}
			>
				<Text style={styles.resetText}>Reiniciar progreso</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.modeBackground,
		paddingTop: 24,
		paddingHorizontal: 16,
	},
	headerBlock: {
		marginBottom: 18,
		padding: 18,
		borderRadius: 24,
		backgroundColor: colors.white,
		elevation: 5,
	},
	headerEyebrow: {
		color: colors.textSecondary,
		fontSize: 12,
		fontWeight: "900",
		letterSpacing: 1,
		marginBottom: 8,
	},
	headerTitle: {
		color: colors.textPrimary,
		fontSize: 24,
		fontWeight: "900",
		lineHeight: 30,
		marginBottom: 6,
	},
	headerSubtitle: {
		color: colors.textSecondary,
		fontSize: 14,
		fontWeight: "600",
		lineHeight: 20,
	},
	list: {
		paddingBottom: 24,
	},
	card: {
		flex: 1,
		backgroundColor: colors.white,
		margin: 8,
		padding: 14,
		borderRadius: 22,
		borderWidth: 1,
		borderColor: colors.borderSoft,
		elevation: 4,
		shadowColor: "#000",
		shadowOpacity: 0.08,
		shadowRadius: 16,
		shadowOffset: { width: 0, height: 6 },
	},
	cardLocked: {
		opacity: 0.7,
	},
	cardTop: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 14,
	},
	objectBadge: {
		width: 62,
		height: 62,
		borderRadius: 18,
		backgroundColor: colors.primaryYellow,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 12,
	},
	image: {
		width: 44,
		height: 44,
		resizeMode: "contain",
	},
	levelInfo: {
		flex: 1,
	},
	levelTitle: {
		fontSize: 18,
		fontWeight: "900",
		color: colors.textPrimary,
	},
	levelDesc: {
		fontSize: 13,
		color: colors.textSecondary,
		marginTop: 4,
		textTransform: "capitalize",
	},
	playButton: {
		marginTop: 2,
		paddingVertical: 12,
		borderRadius: 16,
		alignItems: "center",
		backgroundColor: colors.levelsGreen,
	},
	lockedButton: {
		backgroundColor: colors.borderSoft,
	},
	playText: {
		color: colors.white,
		fontSize: 16,
		fontWeight: "900",
	},
	resetButton: {
		marginHorizontal: 8,
		marginBottom: 18,
		marginTop: -12,
		paddingVertical: 16,
		borderRadius: 18,
		alignItems: "center",
		backgroundColor: "#DD4B4B",
	},
	resetText: {
		color: colors.white,
		fontSize: 16,
		fontWeight: "900",
	},
	backButtonWrapper: {
		position: "absolute",
		top: 24,
		left: 16,
		zIndex: 10,
	},
	backButton: {
		width: 56,
		height: 56,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.white,
		elevation: 4,
		shadowColor: "#000",
		shadowOpacity: 0.08,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 6 },
	},
	backIcon: {
		color: colors.textPrimary,
		fontSize: 38,
		fontWeight: "700",
		lineHeight: 40,
	},
	miniHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 60,
		marginBottom: 12,
		paddingHorizontal: 16,
		borderRadius: 18,
		backgroundColor: "#FFFFFF",
		elevation: 3,
		shadowColor: "#000",
		shadowOpacity: 0.06,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 5 },
	},
	progressTitle: {
		color: colors.textSecondary,
		fontSize: 14,
		fontWeight: "700",
		letterSpacing: 0.7,
	},
	progressText: {
		color: colors.textPrimary,
		fontSize: 18,
		fontWeight: "900",
	},
	statusRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 12,
	},
	statusText: {
		fontSize: 12,
		fontWeight: "800",
		textTransform: "uppercase",
	},
	statusCompleted: {
		color: "#2D9CDB",
	},
	statusActive: {
		color: "#27AE60",
	},
	statusLocked: {
		color: "#A3A3A3",
	},
	completedDot: {
		fontSize: 18,
		color: "#2D9CDB",
	},
	playButtonActive: {
		backgroundColor: "#3CB371",
	},
});
