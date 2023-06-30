import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

interface BackgroundBlurProps {
  intensity?: number;
}

const BackgroundBlur: React.FC<BackgroundBlurProps> = ({ intensity = 70 }) => {
  return (
    <BlurView intensity={intensity} style={StyleSheet.absoluteFill} />
  );
};

export default BackgroundBlur;
