// LoginForm.tsx

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import LabelInput from './LabelInput';


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
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />
        <LabelInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
        />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
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
  button: {
    backgroundColor: '#3b5998',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginForm;
