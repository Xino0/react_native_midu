import { Pressable, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import Screen from '../../components/Screen';
import { Link, Stack } from 'expo-router';
import { HomeSolid, Logo } from '../../components/Icons';

export default function About() {
  console.log('About');

  return (
    <Screen className="bg-slate-800 w-full h-full ">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitle: 'About',
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <ScrollView className="px-3">
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin sollicitudin ex. Etiam rutrum, lorem ut rutrum feugiat,
          tellus lectus euismod felis, ut viverra mi urna vel est. Aenean luctus
          imperdiet dignissim. Aliquam non metus non tellus porttitor laoreet
          in.
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin sollicitudin ex. Etiam rutrum, lorem ut rutrum feugiat,
          tellus lectus euismod felis, ut viverra mi urna vel est. Aenean luctus
          imperdiet dignissim. Aliquam non metus non tellus porttitor laoreet
          in.
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin sollicitudin ex. Etiam rutrum, lorem ut rutrum feugiat,
          tellus lectus euismod felis, ut viverra mi urna vel est. Aenean luctus
          imperdiet dignissim. Aliquam non metus non tellus porttitor laoreet
          in.
        </Text>
      </ScrollView>
    </Screen>
  );
}
