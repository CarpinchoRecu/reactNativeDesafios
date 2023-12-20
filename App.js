import { StatusBar } from "react-native";
import CategoriasScreen from "./src/screens/CategoriasScreen";
import { useFonts } from 'expo-font'

export default function App() {

  const [fontLoaded] = useFonts({
    'JosefinSans': require('./assets/fonts/JosefinSans.ttf'),
  })
  
  return (
    <>
      <StatusBar />
      <CategoriasScreen />
    </>
  );
}
