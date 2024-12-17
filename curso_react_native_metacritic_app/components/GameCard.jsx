import { useEffect, useRef } from 'react';
import { Text, View, Image, Animated, Pressable } from 'react-native';
import Score from './Score';
import { Link } from 'expo-router';

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <Pressable>
        {({ pressed }) => (
          <View
            className="bg-slate-700 mb-5 rounded-lg "
            style={{
              opacity: pressed ? 0.7 : 1,
            }}
            key={game.slug}
          >
            <View className="p-2 w-full h-48 overflow-hidden rounded-lg">
              <Image
                className="w-full h-full rounded-lg object-cover object-center"
                source={{ uri: game.image }}
                resizeMode="cover"
              />
            </View>
            <View className="p-2">
              <Text className="text-white font-bold mb-2 text-xl">
                {' '}
                {game.title}
              </Text>
              <Text className="text-gray-300 text-lg mb-1">
                {game.description}
              </Text>
              <Score score={game.score} maxScore={100} />
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}
