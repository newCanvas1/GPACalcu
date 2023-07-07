import { useContext, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorContext } from "../../context";
export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ColorContext);
  async function getMode() {
    let darkStorage = await AsyncStorage.getItem("darkmode");
    if (darkStorage) {
      setDarkMode(JSON.parse(darkStorage));
    } else {
      await AsyncStorage.setItem("darkmode", JSON.stringify(darkMode));
    }
  }
  useEffect(() => {
    getMode();
  }, []);
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      position: "absolute",
      marginTop: 80,
      marginLeft: 20,
    },
    general: {
      borderRadius: 4,
      padding: 1,
      position: "absolute",
      zIndex: -1,
      transform: [{ translateX: -9 }, { translateY: 9 },{scale:0.8}],
    },
    toggled: { transform: [{ scale: 1.2 }], zIndex: 1 },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          setDarkMode((prev) => {
            return !prev;
          });
          console.log(darkMode);
          await AsyncStorage.setItem("darkmode", JSON.stringify(false));
        }}
      >
        <View style={[styles.general, !darkMode && styles.toggled]}>
          <Text>🌝</Text>
        </View>
        <View style={[styles.general, darkMode && styles.toggled]}>
          <Text>🌚</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
