import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}
            {!loggedIn &&(
                <>
                    <Text style={styles.regularText}>Logged in to continue </Text>
                    <TextInput
                        style={styles.inputBox}
                        value={email}
                        onChangeText={onChangeEmail}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                    />
                    <TextInput
                        style={styles.inputBox}
                        value={password}
                        onChangeText={onChangePassword}
                        placeholder={'Password'}
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />
                     <Pressable
                        style={styles.button}
                        onPress={() => {
                            // Simula autenticación y navega a WelcomeScreen
                            navigation.navigate('Welcome');
                        }}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </Pressable>
                </>
            )}     
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
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
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    button: {
        fontSize:22,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        padding: 10,
        margin: 100,
        marginVertical: 8,
        borderWidth:2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
    },
});