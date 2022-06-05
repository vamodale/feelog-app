import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { Poppins_300Light, Poppins_500Medium, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import { useAuth, AuthProvider } from './src/hooks/auth2'

import { LogBox } from "react-native";

const ignoreWarns = [
    "ViewPropTypes will be removed",
    "expo-app-loading is deprecated in favor of expo-splash-screen",
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'."
];
const warn = console.warn;


console.warn = (...arg) => {
    for (let i = 0; i < ignoreWarns.length; i++) {
        if (arg[0].startsWith(ignoreWarns[i]))  return;
    }
    warn(...arg);
};

LogBox.ignoreLogs(ignoreWarns);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  const { userStorageLoading } = useAuth()

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}