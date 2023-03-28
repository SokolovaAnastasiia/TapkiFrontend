import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
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

interface TodoListProps {
  token: string;
  onLogout: () => void;
}


const TodoList: React.FC<TodoListProps> = ({ token, onLogout }) =>  {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const fetchTodos = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/tasks', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     });
  //     const data = await response.json();
  //     setTodos(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else if (response.status === 401) {
        console.error('Unauthorized request:', response.status);
        // Handle unauthorized request, e.g., redirect to login page
      } else {
        console.error('Failed to fetch todos:', response.status);
        // Handle other errors
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  

  const addTask = async (name: string) => {
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
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
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default TodoList;
