

import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import TaskStyles from '../Styles/TaskStyles';

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

interface TaskProps {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
  toggleCompleted: () => void;
  displayChildrenTasks: () => void;
  position: { x: number; y: number };
}

const Task: React.FC<TaskProps> = ({ task, toggleCompleted, displayChildrenTasks, position }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 18000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const rotating = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const reverseRotating = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  return (
    <TouchableOpacity
      onPress={displayChildrenTasks}
      style={[TaskStyles.task, { left: position.x, top: position.y }]}>
        <AnimatedImageBackground
          source={require('../assets/img/Шарик.png')}
          style={{
            ...TaskStyles.circle,
            transform: [{ rotate: rotating }],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Animated.View style={{ transform: [{ rotate: reverseRotating }] }}>
            <Text
              style={task.completed ? TaskStyles.completedText : TaskStyles.text}
            >
              {task.name}
            </Text>
          </Animated.View>
        </AnimatedImageBackground>

        <TouchableOpacity
          onPress={toggleCompleted}
          style={[
            TaskStyles.completionButton,
            task.completed ? TaskStyles.completedButton : TaskStyles.incompleteButton,
          ]}
        />
    </TouchableOpacity>
  );
};

export default Task;
