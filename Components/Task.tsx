// Task.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
  return (
    <TouchableOpacity
      onPress={displayChildrenTasks}
      style={[TaskStyles.task, { left: position.x, top: position.y }]}
    >
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
