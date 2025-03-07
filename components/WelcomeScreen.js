import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    useColorScheme,
    Button,
  } from 'react-native';

import { useNavigation } from '@react-navigation/native';

  
  export default function WelcomeScreen() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

  
    return (
      <ScrollView
        style={[
          styles.container,
          colorScheme === 'light'
            ? { backgroundColor: '#fff' }
            : { backgroundColor: '#333333' },
        ]}>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.image}
            source={require('../assets/logo.png')}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
          />
  
          <Text
            style={[
              styles.headerText,
              colorScheme === 'light'
                ? { color: '#333333' }
                : { color: '#EDEFEE' },
            ]}>
            Little Lemon
          </Text>
        </View>
        <Text
          style={[
            styles.regularText,
            colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
          ]}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear your experience with us!
        </Text>
        <Button
        title="See Menu"
        onPress={() => navigation.navigate('Menu')}
        />
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10,
    },
    headerText: {
      paddingRight: 10,
      paddingLeft: 20,
      paddingTop: 30,
      paddingBottom: 10,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 20,
    },
  });