import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function GpaSection({ gpa }) {


  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{gpa}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "blue",
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  text: { color: "#fff", fontWeight: "bold",alignSelf:"center" },
});
