import * as React from 'react';
import { View, Text} from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style ={{flex:1}}>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center',
                    color: '#EDEFEE',
                    padding: 40,
                }}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={{
                    fontSize: 24,
                    marginVertical: 20,
                    textAlign: 'center',
                    color: '#EDEFEE',
                    padding: 20,
                }}>
                    Little Lemmon is a charming neighborhood cafe that offers a variety of delicious treats and beverages.
                    It serves simple food and clasic drinks. We would love to hear your experience with us.
            </Text>
        </View>
    );
}