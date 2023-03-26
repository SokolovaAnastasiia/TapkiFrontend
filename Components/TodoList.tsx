import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AddTask from './AddTask';
import TodoListStyles from '../Styles/TodoListStyles';


interface Todo {
  id: number;
  name: string;
  parent_id: number | null;
  created_at: string;
  updated_at: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addTask = async (name: string) => {
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          completed: false,
        }),
      });
      const newTask = await response.json();
      setTodos((prevTodos) => [...prevTodos, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={TodoListStyles.container}>
      <AddTask onAddTask={addTask} />
      {todos.map((todo) => (
        <Text key={todo.id}>{todo.name}</Text>
      ))}
    </View>
  );
};

export default TodoList;
