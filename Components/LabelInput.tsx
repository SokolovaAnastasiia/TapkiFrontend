import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

interface LabelInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ borderRadius: 20, overflow: 'hidden' }}>
      <BlurView intensity={30} style={styles.blurredLabel}>
        <TextInput
          style={[
            styles.input,
            isFocused ? styles.focusedInputBorder : styles.blurredInputBorder,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </BlurView>
      </View>

      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
    
  },
  blurredLabel : Platform.select({
    default: {
      borderRadius: 20,
    },
    web: {
      borderRadius: 40,
    },
    
  }),
  label: Platform.select({ 
    default: {
      color: '#fff',
      fontSize: 14,
      marginBottom: 5,
    },
    web: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 5,
    },

  }),
  input: Platform.select({ 
    default: {
      color: '#fff',
      overflow: 'hidden',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
    },
    web : {
      color: '#fff',
      overflow: 'hidden',
      paddingHorizontal: 35,
      paddingVertical: 20,
      borderRadius: 70,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
    },
  }),
  blurredInputBorder: {
    borderColor: '#F183EA',
    borderWidth: 0.2,
  },
  focusedInputBorder: {
    borderColor: '#F183EA',
    borderWidth: 2,
  },
});

export default LabelInput;
