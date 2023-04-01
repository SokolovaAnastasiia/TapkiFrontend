import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AuthSwitcherProps {
  showLoginForm: boolean;
  setShowLoginForm: (show: boolean) => void;
}

const AuthSwitcher: React.FC<AuthSwitcherProps> = ({ showLoginForm, setShowLoginForm }) => {
  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity
        style={[styles.switchButton, showLoginForm && styles.activeButton]}
        onPress={() => setShowLoginForm(true)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.switchButton, !showLoginForm && styles.activeButton]}
        onPress={() => setShowLoginForm(false)}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    overflow: "hidden",
    
  },
  switchButton: {
    paddingHorizontal: 32,
    paddingVertical: 14,

  },
  activeButton: {
    backgroundFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AuthSwitcher;
