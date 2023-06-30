import { useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { calculateGpa } from "../../functions.js";
import { MyContext } from "../../context.js";
export default function CalcGpa() {
  const { coursesList,setGpa,gpaSystem } = useContext(MyContext);

  async function getGpa() {
    let gpa = await calculateGpa(coursesList, gpaSystem);
    setGpa(gpa);
    if (isNaN(gpa)) {
      setGpa(0.0);
    }
  }
  useEffect(() => {
    getGpa();
  }, [coursesList]);

  return <></>;
}

const styles = StyleSheet.create({});
