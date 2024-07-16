import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigator from "./components/Navigator/Navigator";
import {
  MyContextProvider,
  CourseContextProvider,
  ColorContextProvider,
} from "./context";
function App() {

  return (
    <ColorContextProvider>
      <MyContextProvider>
        <CourseContextProvider>
          <Navigator />
        </CourseContextProvider>
      </MyContextProvider>
    </ColorContextProvider>
  );
}

export default App;
