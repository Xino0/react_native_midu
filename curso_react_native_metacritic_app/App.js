import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Main } from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import './global.css';

export default function App() {
  console.log('App');
  NavigationBar.setBackgroundColorAsync('#06b6d4');

  return (
    <SafeAreaProvider>
      <View className="h-full w-full bg-cyan-500 flex-1">
        <StatusBar style="dark" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
