import AsyncStorage from "@react-native-async-storage/async-storage";

const UNLOCK_KEY = "@CuantosHay:unlockedLevels";
const SCORE_KEY = "@CuantosHay:score";

export async function getUnlockedLevels() {
  try {
    const raw = await AsyncStorage.getItem(UNLOCK_KEY);
    if (!raw) {
      const initial = [1];
      await AsyncStorage.setItem(UNLOCK_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (e) {
    return [1];
  }
}

async function saveUnlockedLevels(list) {
  try {
    await AsyncStorage.setItem(UNLOCK_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}

export async function unlockLevel(levelId) {
  try {
    const list = await getUnlockedLevels();
    if (!list.includes(levelId)) {
      list.push(levelId);
      list.sort((a, b) => a - b);
      await saveUnlockedLevels(list);
    }
    return list;
  } catch (e) {
    return await getUnlockedLevels();
  }
}

export async function unlockNextLevel(currentId) {
  return unlockLevel(currentId + 1);
}

export async function resetProgress() {
  const initial = [1];
  await saveUnlockedLevels(initial);
  await resetScore();
  return initial;
}

export async function isLevelUnlocked(levelId) {
  const list = await getUnlockedLevels();
  return list.includes(levelId);
}

// Score persistence
export async function getScore() {
  try {
    const raw = await AsyncStorage.getItem(SCORE_KEY);
    if (!raw) return 0;
    return Number(JSON.parse(raw)) || 0;
  } catch (e) {
    return 0;
  }
}

export async function saveScore(value) {
  try {
    await AsyncStorage.setItem(SCORE_KEY, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

export async function addPoint() {
  const s = await getScore();
  const next = s + 1;
  await saveScore(next);
  return next;
}

export async function resetScore() {
  await saveScore(0);
  return 0;
}
