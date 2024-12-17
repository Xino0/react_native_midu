import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { HomeSolid, InformationCircle } from '../../components/Icons';

export default function TabsLayout() {
  return (
    <Tabs
      className="bg-s"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0f172a' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeSolid stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <InformationCircle stroke={color} />,
        }}
      />
    </Tabs>
  );
}
