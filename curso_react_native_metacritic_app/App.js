import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Main } from './components/Main';
import './global.css';

export default function App() {
  console.log('App');

  return (
    <View>
      <View className="h-full w-full bg-cyan-700 flex-1">
        <StatusBar
          style="dark"
          backgroundColor="transparent"
          translucent={true}
        />
        <Main />
      </View>
    </View>
  );
}
