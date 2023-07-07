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
      gap: 10,
      position: "absolute",
      marginTop: 80,
      marginLeft: 20,
      backgroundColor:darkMode?"#633573":"#006CD0"
      ,padding:4
      ,borderRadius:10
    },
    general: { borderRadius: 4, padding: 1},
    toggled: { transform:[{scale:1.2}]},
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[!darkMode && styles.toggled, styles.general]}
        onPress={async () => {
          setDarkMode(false);
          await AsyncStorage.setItem("darkmode", JSON.stringify(false));
        }}
      >
        <Text>🌝</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[darkMode && styles.toggled, styles.general]}
        onPress={async () => {
          setDarkMode(true);
          await AsyncStorage.setItem("darkmode", JSON.stringify(true));
        }}
      >
        <Text>🌚</Text>
      </TouchableOpacity>
    </View>
  );
}
