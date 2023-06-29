import { useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { calculateGpa } from "../../functions.js";
export default function CalcGpa({ coursesList, setGpa, system }) {
  async function getGpa() {
    let gpa = await calculateGpa(coursesList, system);
    setGpa(gpa);
    if (isNaN(gpa)) {
      setGpa(0.0);
    }
  }
  useEffect(() => {
    getGpa();
  }, [coursesList]);

  return (
    <>
    <TouchableOpacity
      style={{ alignSelf: "center" }}
      onPress={async () => {
        await getGpa();
      }}
    >
      <Text>احسب</Text>
    </TouchableOpacity>
    </>
    
  );
}

const styles = StyleSheet.create({});
