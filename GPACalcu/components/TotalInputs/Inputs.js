import { Text, View, TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import { TotalGpa } from "../../context";
import InputOld from "./InputOld";
import { getNewGpa } from "../../functions.js";
import { MyContext } from "../../context";
export default function Inputs() {
  const { coursesList, gpaSystem } = useContext(MyContext);
  const { oldGpa, setOldGpa, oldHours, setOldHours, setNewGpa } =
    useContext(TotalGpa);
  async function getGpa() {
    const gpa = await getNewGpa(oldGpa, oldHours, coursesList, gpaSystem);
    setNewGpa(gpa);
  }
  useEffect(() => {
    getGpa();
  }, [coursesList, oldGpa, oldHours]);
  return (
    <View>
      <InputOld storageKey={"oldGpa"} label={"المعدل القديم"} set={setOldGpa} />
      <InputOld
        storageKey={"oldHours"}
        label={"الساعات القديمة"}
        set={setOldHours}
      />
    </View>
  );
}
