import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemmonFooter from './components/LittleLemmonFooter';
import WelcomeScreen from './components/WelcomeScreen';
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: '#495E57'}}>
          <LittleLemmonFooter />
      </View>
    </>
  );
}
