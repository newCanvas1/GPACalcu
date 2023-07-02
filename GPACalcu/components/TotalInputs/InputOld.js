import { Text, View, TextInput } from "react-native";
import { styles } from "./style";
import { useContext, useEffect } from "react";
import { ColorContext } from "../../context";
export default function InputOld({ label, set, initial }) {
  const { TEXT, THEME } = useContext(ColorContext);
  useEffect(() => {}, [initial]);
  return (
    <View styles={styles.container}>
      <View style={styles.label}>
        <Text style={{ color: TEXT }}> {label}</Text>
      </View>
      <TextInput
        defaultValue={initial}
        keyboardType="decimal-pad"
        style={[{ ...styles.input }, { borderColor: THEME }]}
        onChangeText={(text) => {
          set(text);
        }}
      />
    </View>
  );
}
