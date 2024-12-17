import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import Screen from '../components/Screen';
import { gamesData } from '../gamesData';

export default function Detail() {
  console.log('Detail');

  const { slug } = useLocalSearchParams();
  console.log('game-slug: ', slug);

  const [gameInfo, setGameInfo] = useState(null);

  const getGameDetails = (slug) => {
    return new Promise((resolve) => {
      const game = gamesData.find((g) => g.slug === slug);
      resolve(game);
    });
  };

  useEffect(() => {
    if (slug) {
      getGameDetails(slug).then(setGameInfo); // Carga los detalles del juego
    }
  }, [slug]);

  return (
    <Screen className="bg-slate-800">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#7e22ce' },
          headerTintColor: 'black',
          headerTitle: 'Detail',
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <ScrollView className="p-4 bg-purl">
            <Image
              source={{ uri: gameInfo.image }}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 10,
                marginBottom: 20,
              }}
            />
            <Text className="text-white font-bold text-2xl mb-4">
              {gameInfo.title}
            </Text>
            <Text className="text-gray-400 text-lg mb-4">
              {gameInfo.description}
            </Text>
            <Text className="text-gray-400 text-lg mb-4">
              <Text className="text-white font-bold">Score: </Text>
              {gameInfo.score}
            </Text>
            <Text className="text-gray-400 text-lg mb-4">
              <Text className="text-white font-bold">Reviews: </Text>
              {gameInfo.reviews}
            </Text>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
