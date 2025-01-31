import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemmonFooter from './components/LittleLemmonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <MenuItems />
      </View>
      <View style={{ backgroundColor: '#495E57'}}>
          <LittleLemmonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
