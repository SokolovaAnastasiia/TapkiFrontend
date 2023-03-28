//TodoList.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AddTask from './AddTask';
import TodoListStyles from '../Styles/TodoListStyles';
import Task from './Task';




interface Todo {
  id: number;
  name: string;
  parent_id: number | null;
  created_at: string;
  updated_at: string;
  completed: boolean;
  toggleCompleted: () => void;
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

  // const toggleTaskCompletion = async (taskId: number) => {
  //   const task = todos.find((todo) => todo.id === taskId);
  //   if (!task) return;
  
  //   try {
  //     const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         completed: !task.completed,
  //       }),
  //     });
  //     if (response.ok) {
  //       setTodos((prevTodos) =>
  //         prevTodos.map((todo) =>
  //           todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
  //         )
  //       );
  //     } else {
  //       console.error('Error updating task completion status:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error updating task completion status:', error);
  //   }
  // };
  
  
  const toggleTaskCompletion = async (id: number) => {
    try {
      const currentTask = todos.find((todo) => todo.id === id);
      if (!currentTask) {
        console.error('Task not found:', id);
        return;
      }
      const completed = currentTask.completed;
  
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          completed: !completed,
        }),
      });
  
      if (response.ok) {
        const updatedTask = await response.json();
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTask : todo))
        );
      } else {
        const errorResponse = await response.json();
        // console.error('Error updating task completion status:', errorResponse);
      }
    } catch (error) {
      console.error('Error updating task completion status:', error);
    }
  };
  

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={TodoListStyles.container}>
      <AddTask onAddTask={addTask} />
      {/* {todos.map((todo) => (
        <Text key={todo.id}>{todo.name}</Text>
      ))} */}
      {todos.map((todo) => (
        <Task
          key={todo.id}
          task={todo}
          toggleCompleted={() => toggleTaskCompletion(todo.id)}
        />
      ))}

      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default TodoList;
