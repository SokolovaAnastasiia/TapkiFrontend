// Wave.tsx

import React from 'react';
import { View } from 'react-native';
import WaveStyles from '../Styles/WaveStyles';

interface WaveProps {
  show: boolean;
}

const Wave: React.FC<WaveProps> = ({ show }) => {
  return (
    <View
      style={[
        WaveStyles.wave,
        show ? WaveStyles.waveVisible : WaveStyles.waveHidden,
      ]}
    />
  );
};

export default Wave;
