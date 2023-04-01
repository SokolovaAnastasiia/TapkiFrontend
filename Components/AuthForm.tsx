// // AuthForm.tsx

// import React, { useState,  useRef } from 'react';
// import { View, StyleSheet } from 'react-native';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
// import AuthSwitcher from './AuthSwitcher';

// interface AuthFormProps {
//   onLogin: (token: string) => void;
//   onRegister: (email: string, password: string, password_confirmation: string) => void;
// }

// const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onRegister }) => {
//   const [showLoginForm, setShowLoginForm] = useState(true);

//   return (
//     <View style={styles.container}>
//       <View style={styles.sphere1} />
//       <View style={styles.sphere2} />
//       <View style={styles.sphere3}  />
//       <AuthSwitcher showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
//       {showLoginForm ? (
//         <LoginForm onLogin={onLogin} />
//       ) : (
//         <RegisterForm onRegister={onRegister} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: '30%',
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: '#091941',
//     flexGrow: 1,
//     justifyContent: 'space-between',
//   },
//   sphere1: {
//     position: 'absolute',
//     left: "-30%",
//     top: "-30%",
//     width: 200,
//     height: 200,
//     borderRadius: 200,
//     backgroundColor: '#D757CE',
//     filter: 'blur(30px)',
//   },
//   sphere2: {
//     position: 'absolute',
//     right: "30%",
//     bottom: "50%",
//     width: 200,
//     height: 200,
//     borderRadius: 200,
//     backgroundColor: 'rgba(136, 61, 255, 0.3)',
//     filter: 'blur(30px)',
//   },
//   sphere3: {
//     position: 'absolute',
//     left: '57%',
//     top: '90%',
//     width: 200,
//     height: 200,
//     borderRadius: 200,
//     backgroundColor: 'rgba(240, 209, 0, 0.3)',
//     filter: 'blur(30px)',
//   },
// });

// export default AuthForm;

// AuthForm.tsx

import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AuthSwitcher from './AuthSwitcher';

interface AuthFormProps {
  onLogin: (token: string) => void;
  onRegister: (email: string, password: string, password_confirmation: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onRegister }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const sphere1Position = useRef(new Animated.ValueXY({ x: -80, y: -130 })).current;
  const sphere2Position = useRef(new Animated.ValueXY({ x: 300, y:450 })).current;
  const sphere3Position = useRef(new Animated.ValueXY({ x: -107, y: 190 })).current;

  const animateSpheres = () => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(sphere1Position, {
            toValue: { x: 0, y: 0 },
            duration: 5000,
            useNativeDriver: false,
          }),
          Animated.timing(sphere1Position, {
            toValue: { x: -30, y: -30 },
            duration: 5000,
            useNativeDriver: false,
          }),
        ]),
        Animated.sequence([
          Animated.timing(sphere2Position, {
            toValue: { x: 300, y: 40 },
            duration: 7000,
            useNativeDriver: false,
          }),
          Animated.timing(sphere2Position, {
            toValue: { x: 230, y: 550 },
            duration: 7000,
            useNativeDriver: false,
          }),
        ]),
        Animated.sequence([
          Animated.timing(sphere3Position, {
            toValue: { x: 200, y: 500 },
            duration: 8000,
            useNativeDriver: false,
          }),
          Animated.timing(sphere3Position, {
            toValue: { x: 57, y: 90 },
            duration: 8000,
            useNativeDriver: false,
          }),
        ]),
      ]),
    ).start();
  };

  useEffect(() => {
    animateSpheres();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sphere1, sphere1Position.getLayout()]} />
      <Animated.View style={[styles.sphere2, sphere2Position.getLayout()]} />
      <Animated.View style={[styles.sphere3, sphere3Position.getLayout()]} />
      <AuthSwitcher showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm} />
      {showLoginForm ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <RegisterForm onRegister={onRegister} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#091941',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  sphere1: {
    position: 'absolute',
    left: "0%",
    top: "0%",
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: '#D757CE',
    filter: 'blur(30px)',
  },
  sphere2: {
    position: 'absolute',
    right: "30%",
    bottom: "50%",
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: 'rgba(136, 61, 255, 0.3)',
    filter: 'blur(30px)',
  },
  sphere3: {
    position: 'absolute',
    left: '237%',
    top: '120%',
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: 'rgba(128, 221, 255, 0.5)',
    filter: 'blur(30px)',
  },
});

export default AuthForm;
