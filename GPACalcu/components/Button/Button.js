import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ColorContext } from "../../context";
export default function Button({ text, action }) {
  const { THEME, TEXT } = useContext(ColorContext);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: THEME,
      padding: 40,
      borderRadius: 10,
      height: "25%",
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
    },
    btnText: { color: TEXT, fontSize: 20, fontWeight: "bold" },
  });

  return (
    <TouchableOpacity
      onPress={action}
      style={styles.container}
      activeOpacity={1}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
