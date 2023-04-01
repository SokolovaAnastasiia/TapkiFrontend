// AddTask.tsx

// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import AddTaskStyles from '../Styles/AddTaskStyles';


// interface AddTaskProps {
//   onAddTask: (name: string) => void;
// }

// const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
//   const [newTaskName, setNewTaskName] = useState('');

//   const handleAddTask = () => {
//     onAddTask(newTaskName);
//     setNewTaskName('');
//   };

//   return (
//     <View style={AddTaskStyles.container}>
//       <TextInput
//         style={AddTaskStyles.input}
//         onChangeText={(text) => setNewTaskName(text)}
//         value={newTaskName}
//         placeholder="Enter new task"
//       />
//       <Button onPress={handleAddTask} title="Add Task" />
//     </View>
//   );
// };

// export default AddTask;


// AddTask.tsx

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import AddTaskStyles from '../Styles/AddTaskStyles';


interface AddTaskProps {
  onAddTask: (name: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = () => {
    onAddTask(newTaskName);
    setNewTaskName('');
    setIsAdding(false);
  };

  const handleAddButtonPress = () => {
    setIsAdding(true);
  };

  const handleTextInputSubmit = () => {
    handleAddTask();
  };

  if (isAdding) {
    return (
      <View style={AddTaskStyles.container}>
        <TextInput
          style={AddTaskStyles.input}
          onChangeText={(text) => setNewTaskName(text)}
          value={newTaskName}
          placeholder="Enter new task"
          onSubmitEditing={handleTextInputSubmit}
          autoFocus
        />
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={AddTaskStyles.addButton} onPress={handleAddButtonPress}>
        <Text style={AddTaskStyles.addButtonText}>+</Text>
      </TouchableOpacity>
    );
  }
};


export default AddTask;
