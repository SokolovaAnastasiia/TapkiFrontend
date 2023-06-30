// LoginForm.tsx

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import LabelInput from './LabelInput';
import { Platform } from 'react-native';

interface LoginFormProps {
  onLogin: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      onLogin(data.token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <View style={styles.container}>
        <LabelInput
          label="Почта"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Введите почту"
        />
        <LabelInput
          label="Пароль"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Введите пароль"
          secureTextEntry
        />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: Platform.select({
    default: {
      borderRadius: 25,
      paddingHorizontal: 25,
      paddingVertical: 10,
      marginTop: 15,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    web: {
      borderRadius: 30,
      paddingHorizontal: 45,
      paddingVertical: 20,
      marginTop: 15,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    
  }),
  buttonText: Platform.select({
    default: {
      color: '#000',
      fontSize: 14,
      textAlign: 'center',
    },
    web: {
      color: '#000',
      fontSize: 18,
      textAlign: 'center',
    }
    
  })
    
  
});

export default LoginForm;
