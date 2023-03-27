// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import TodoList from './Components/TodoList';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <TodoList />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from './Components/TodoList';
import LoginForm from './Components/LoginForm';

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

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <View style={styles.container}>
      {token ? (
        <TodoList token={token} onLogout={onLogout} />
      ) : (
        <LoginForm onLogin={storeToken} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
