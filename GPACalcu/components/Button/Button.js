import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ text, action }) {
    
  return (
    <TouchableOpacity onPress={action} style={styles.container} activeOpacity={1}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "blue", padding: 40,borderRadius:10 },
  btnText: { color: "#fff",fontSize:20,fontWeight:"bold" },
});
