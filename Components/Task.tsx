// // Task.tsx

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import TaskStyles from '../Styles/TaskStyles';

// interface TaskProps {
//   task: {
//     id: number;
//     name: string;
//     completed: boolean;
//   };
//   toggleCompleted: () => void;
//   displayChildrenTasks: () => void;
//   position: { x: number; y: number };
// }

// const Task: React.FC<TaskProps> = ({ task, toggleCompleted, displayChildrenTasks, position }) => {
//   return (
//     <TouchableOpacity
//       onPress={displayChildrenTasks}
//       style={[TaskStyles.task, { left: position.x, top: position.y }]}>
//       <View
//         style={[
//           TaskStyles.circle,
//           task.completed ? TaskStyles.completedCircle : TaskStyles.incompleteCircle,
//         ]}
//       >
//         <Text
//           style={task.completed ? TaskStyles.completedText : TaskStyles.text}
//         >
//           {task.name}
//         </Text>
//       </View>
//       <TouchableOpacity
//         onPress={toggleCompleted}
//         style={[
//           TaskStyles.completionButton,
//           task.completed ? TaskStyles.completedButton : TaskStyles.incompleteButton,
//         ]}
//       />
//     </TouchableOpacity>
//   );
// };

// export default Task;

import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import TaskStyles from '../Styles/TaskStyles';

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
        duration: 4000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const rotating = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity
      onPress={displayChildrenTasks}
      style={[TaskStyles.task, { left: position.x, top: position.y }]}>
      <Animated.View style={{ transform: [{ rotate: rotating }] }}>
        <View style={TaskStyles.smallCircle} />
        <View style={[TaskStyles.smallCircle, { backgroundColor: 'red', top: 20 }]} />
        <View style={[TaskStyles.smallCircle, { backgroundColor: 'blue', top: 40 }]} />
      </Animated.View>
      <View
        style={[
          TaskStyles.circle,
          task.completed ? TaskStyles.completedCircle : TaskStyles.incompleteCircle,
        ]}
      >
        <Text
          style={task.completed ? TaskStyles.completedText : TaskStyles.text}
        >
          {task.name}
        </Text>
      </View>
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
