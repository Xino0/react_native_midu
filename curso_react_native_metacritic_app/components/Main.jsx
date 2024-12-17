import { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { AnimatedGameCard } from './GameCard';
import '../global.css';
import Screen from './Screen';
import { gamesData } from '../gamesData';

export function Main() {
  console.log('Main');
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simulate fetching games for testing
    setGames(gamesData);
  }, []);

  return (
    <Screen className="bg-slate-800">
      {games.length === 0 ? (
        <ActivityIndicator color={'#fff'} size={'large'} />
      ) : (
        <FlatList
          className="px-10 py-2"
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
