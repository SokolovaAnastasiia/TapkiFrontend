
import React, { useState } from 'react';
import LabelInput from './LabelInput';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
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
      <LabelInput
        label="Подтвердите пароль"
        value={passwordConfirmation}
        onChangeText={(text) => setPasswordConfirmation(text)}
        placeholder="Введите пароль"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        
            <Text style={styles.buttonText}>Зарегистрироваться</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: Platform.select({
    default: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 70,
    },
    web: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0,
    },
  }),
  button: Platform.select({

    default : {
      borderRadius: 25,
      paddingHorizontal: 25,
      paddingVertical: 10,
      marginTop: 15,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    web : {
      borderRadius: 25,
      paddingHorizontal: 45,
      paddingVertical: 20,
      marginTop: 15,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },

    }),
    
    
  buttonText: Platform.select({
    default : {
      color: '#000',
      fontSize: 14,
      textAlign: 'center'
    },
    web : {
      color: '#000',
      fontSize: 18,
      textAlign: 'center'
    }
    
  }),
});

export default RegisterForm;
