import { Text, View, TextInput } from "react-native";
import { styles } from "./style";
import { useEffect } from "react";

export default function InputOld({ label, set, initial }) {
  useEffect(() => {}, [initial]);
  return (
    <View styles={styles.container}>
      <View style={styles.label}>
        <Text> {label}</Text>
      </View>
      <TextInput
        defaultValue={initial}
        keyboardType="decimal-pad"
        style={styles.input}
        onChangeText={(text) => {
          set(text);
        }}
      />
    </View>
  );
}
