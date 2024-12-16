import { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { AnimatedGameCard } from './GameCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from './logo';

export function Main() {
  console.log('Main');
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Simulate fetching games for testing
    setGames([
      {
        slug: 'game-1',
        image: 'https://via.placeholder.com/107x147',
        title: 'Game 1',
        description: 'Description of Game 1',
        score: '8.5',
      },
      {
        slug: 'game-2',
        image: 'https://via.placeholder.com/107x147',
        title: 'Game 2',
        description: 'Description of Game 2',
        score: '7.8',
      },
      {
        slug: 'game-3',
        image: 'https://via.placeholder.com/107x147',
        title: 'Game 3',
        description: 'Description of Game 3',
        score: '9.0',
      },
      {
        slug: 'game-4',
        image: 'https://via.placeholder.com/107x147',
        title: 'Game 4',
        description: 'Description of Game 4',
        score: '6.5',
      },
      {
        slug: 'game-5',
        image: 'https://via.placeholder.com/107x147',
        title: 'Game 5',
        description: 'Description of Game 5',
        score: '8.2',
      },
      {
        slug: 'game-6',
        image: 'https://via.placeholder.com/107x147',
        title: 'Game 6',
        description: 'Description of Game 6',
        score: '7.9',
      },
    ]);
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.top }}>
      <View className="items-center pb-2">
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator color={'#fff'} size={'large'} />
      ) : (
        <FlatList
          className="px-10 pt-2"
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
