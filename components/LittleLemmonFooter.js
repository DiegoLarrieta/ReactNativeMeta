import * as React from 'react';
import { View, Text} from 'react-native';

export default function LittleLemmonFooter() {
  return (
    <View
        style={{
            backgroundColor: '#F4CE14',
            marginBottom: 10,
        }}>
      <Text
        style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'black',
        }}>
        All rights reserved by Little Lemmon, 2025</Text>
    </View>
  );
}