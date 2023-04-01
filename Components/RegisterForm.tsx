
import React, { useState } from 'react';
import LabelInput from './LabelInput';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface RegisterFormProps {
  onRegister: (email: string, password: string, password_confirmation: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = () => {
    onRegister(email, password, passwordConfirmation);
  };

  return (
    <View style={styles.container}>
      <LabelInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
      />
      <LabelInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry
      />
      <LabelInput
        label="Password Confirmation"
        value={passwordConfirmation}
        onChangeText={(text) => setPasswordConfirmation(text)}
        placeholder="Confirm your password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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

export default RegisterForm;
