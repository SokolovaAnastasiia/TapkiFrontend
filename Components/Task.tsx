import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface TaskProps {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
  toggleCompleted: () => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleCompleted }) => {
  return (
    <TouchableOpacity onPress={toggleCompleted} style={{ marginVertical: 5 }}>
      <Text
        style={{
          textDecorationLine: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Task;
