
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { Poppins_500Medium, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Routes />
    </>
  );
}

