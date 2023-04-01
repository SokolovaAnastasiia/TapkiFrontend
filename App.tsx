// App.tsx

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from './Components/TodoList';
import AuthForm from './Components/AuthForm';

export default function App() {
  const [token, setToken] = useState<string | null>(null);

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('@token', token);
      setToken(token);
    } catch (error) {
      console.error('Error storing token:', error);
    }
  };

  const fetchToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('@token');
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem('@token');
      setToken(null);
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };

  const handleRegister = async (email: string, password: string, password_confirmation: string) => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
            password_confirmation,
          },
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        storeToken(data.auth_token);
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.error('Registration failed:', response.status, errorData.errors);
      } else {
        console.error('Registration failed:', response.status);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  
  

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <View style={styles.container}>
      {token ? (
        <TodoList token={token} onLogout={onLogout} />
      ) : (
        <AuthForm onLogin={storeToken} onRegister={handleRegister} />
      )}
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091941',
    alignItems: 'center',
    alignContent: 'center',
  },
});
