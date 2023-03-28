import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

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
    <View>
      <Text>Email:</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <Text>Password Confirmation:</Text>
      <TextInput
        onChangeText={(text) => setPasswordConfirmation(text)}
        value={passwordConfirmation}
        secureTextEntry={true}
        placeholder="Confirm your password"
      />
      <Button onPress={handleRegister} title="Register" />
    </View>
  );
};

export default RegisterForm;
