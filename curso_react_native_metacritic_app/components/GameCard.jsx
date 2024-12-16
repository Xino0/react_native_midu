import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

export function GameCard({ game }) {
  return (
    <View className="bg-slate-700 mb-5 rounded-lg " key={game.slug}>
      <View className="p-2 w-full h-48 overflow-hidden rounded-lg">
        <Image
          className="w-full h-full rounded-lg object-cover object-center"
          source={{ uri: game.image }}
          resizeMode="cover"
        />
      </View>
      <View className="p-2">
        <Text className="text-white font-bold mb-2 text-xl"> {game.title}</Text>
        <Text className="text-gray-300 text-lg mb-1">{game.description}</Text>
        <Text className="text-green-400 font-bold text-lg">{game.score}</Text>
      </View>
    </View>
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

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#e90',
    textAlign: 'center',
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
});