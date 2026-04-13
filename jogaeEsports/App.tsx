import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';
import { ReservationsProvider } from './src/context/ReservationsContext';

export default function App() {
  return (
    <NavigationContainer>
      <ReservationsProvider>
        <Routes />
      </ReservationsProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});