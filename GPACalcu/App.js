import Navigator from "./components/Navigator/Navigator";
import { MyContextProvider, CourseContextProvider } from "./context";
function App() {
  return (
    <MyContextProvider>
      <CourseContextProvider>
        <Navigator />
      </CourseContextProvider>
    </MyContextProvider>
  );
}

export default App;
