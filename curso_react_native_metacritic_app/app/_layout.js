import { View, Pressable } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { Logo } from '../components/Icons';
import { UserIcon } from '../components/Icons';

export default function _layout() {
  console.log('_layout');
  return (
    <View className="flex-1 ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '',
          headerTitle: '',
          animation: 'none',
          headerLeft: () => <Logo key="logo" />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <UserIcon key="info-icon" stroke={'white'} />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
