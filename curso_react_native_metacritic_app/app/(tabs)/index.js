import { StatusBar } from 'expo-status-bar';
import { Main } from '../../components/Main';

export default function Index() {
  console.log('Index');

  return (
    <>
      <StatusBar style="light" />
      <Main />
    </>
  );
}
