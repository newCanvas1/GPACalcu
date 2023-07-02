import { Text, View, TextInput } from "react-native";
import { styles } from "./style";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorContext } from "../../context";
export default function InputOld({ label, set, storageKey }) {
  const [stored, setStored] = useState(0.0);
  const { darkMode } = useContext(ColorContext);
  async function getMode() {
    let storedValue = await AsyncStorage.getItem(storageKey);
    if (storedValue) {
      set(JSON.parse(storedValue));
      setStored(JSON.parse(storedValue));
    } else {
      console.log("no such key");
    }
  }
  useEffect(() => {
    getMode();
  }, []);
  return (
    <View styles={styles.container}>
      <View style={styles.label}>
        <Text style={{ color: darkMode ? "#ffffff" : "black" }}> {label}</Text>
      </View>
      <TextInput
        defaultValue={`${stored}`}
        keyboardType="decimal-pad"
        style={[
          { ...styles.input },
          { borderColor: darkMode ? "#633573" : "#006CD0",color:darkMode?"#ffffff":"black" },
        ]}
        onChangeText={async (text) => {
          set(text);
          await AsyncStorage.setItem(storageKey, JSON.stringify(text));
        }}
      />
    </View>
  );
}
