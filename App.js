import { NativeBaseProvider } from "native-base";
import { StatusBar } from 'expo-status-bar';
import { AppStack } from "./src/components/stacks/AppStack";
// import IndexScreen from "./src/components/screens/IndexScreen";

export default function App() {

  return (
    <>
      <NativeBaseProvider>
        <AppStack />
        {/* <IndexScreen /> */}
        <StatusBar style='auto' />
      </NativeBaseProvider>
    </>
  );
}
