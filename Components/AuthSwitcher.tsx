import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

interface AuthSwitcherProps {
  showLoginForm: boolean;
  setShowLoginForm: (show: boolean) => void;
}

const AuthSwitcher: React.FC<AuthSwitcherProps> = ({ showLoginForm, setShowLoginForm }) => {
  return (
    <View style={styles.switchContainer}>
      <BlurView intensity={30}>
        <TouchableOpacity
          style={[styles.switchButton, showLoginForm && styles.activeButton]}
          onPress={() => setShowLoginForm(true)}
        >
          <Text style={styles.buttonText}>Вход</Text>
        </TouchableOpacity>
      </BlurView>
      
      <TouchableOpacity
        style={[styles.switchButton, !showLoginForm && styles.activeButton]}
        onPress={() => setShowLoginForm(false)}
      >
        <Text style={styles.buttonText}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: Platform.select({
    default: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      overflow: "hidden",
    },
    web: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 30,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      overflow: "hidden",
    }
  }),
  switchButton: Platform.select({
    default: {
      paddingHorizontal: 32,
      paddingVertical: 14,
    },
    web: {
      paddingHorizontal: 192,
      paddingVertical: 18,
      
    }

  }),
  activeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonText: Platform.select({
    default: {
      color: '#fff',
      fontSize: 14,
    },
    web : {
      color: '#fff',
      fontSize: 22,
    },
    
  })
    
});

export default AuthSwitcher;