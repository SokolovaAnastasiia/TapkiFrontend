// TodoList.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Dimensions } from 'react-native';

import AddTask from './AddTask';
import TodoListStyles from '../Styles/TodoListStyles';
import Task from './Task';
import SettingsPage from '../Components/SettingPage';

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
  const [selectedTasks, setSelectedTasks] = useState<Todo[]>([]);
  const [showingChildrenTasks, setShowingChildrenTasks] = useState<boolean>(false);
  const [showCompleted, setShowCompleted] = useState(true);  // new state variable

  const backToMainTasks = () => {
    setSelectedTasks([]);
    setShowingChildrenTasks(false);
  };

const displayChildrenTasks = async (id: number) => {
    console.log(`Displaying children tasks for task ID: ${id}`);
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.children.length > 0) {
          setSelectedTasks(data.children);
          setShowingChildrenTasks(true);
        } else {
          console.log(`No child tasks found for task ID: ${id}`);
        }
      } else if (response.status === 401) {
        console.error('Unauthorized request:', response.status);
        // Handle unauthorized request, e.g., redirect to login page
      } else {
        console.error('Failed to fetch children tasks:', response.status);
        // Handle other errors
      }
    } catch (error) {
      console.error('Error fetching children tasks:', error);
    }
  };



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
  
  const toggleTaskCompletion = async (id: number) => {
    try {
      const currentTask = todos.find((todo) => todo.id === id) || selectedTasks.find((task) => task.id === id);
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
        setSelectedTasks((prevSelectedTasks) =>
          prevSelectedTasks.map((task) => (task.id === id ? updatedTask : task))
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

  const radius = 100;
  const center = { x: 0, y: 0 };

  const calculateTaskPosition = (index: number, totalTasks: number) => {
    const angle = (index / totalTasks) * 15 * Math.PI;
    const x = center.x + radius * Math.cos(angle)/16;
    const y = center.y + radius * Math.sin(angle)/16;
    return { x, y };
  };

  

  const renderTasks = () => {
    const tasksToRender = showingChildrenTasks ? selectedTasks : todos;
    const filteredTasks = showCompleted ? tasksToRender : tasksToRender.filter(task => !task.completed);
    const totalTasks = filteredTasks.length;

    return filteredTasks.map((todo, index) => {
      const position = calculateTaskPosition(index, totalTasks);
      return (
        <Task
          key={todo.id}
          task={todo}
          toggleCompleted={() => toggleTaskCompletion(todo.id)}
          displayChildrenTasks={() => displayChildrenTasks(todo.id)}
          position={position}
        />
      );
    });
  };

  return (
    <View style={TodoListStyles.container}>
      <View style={TodoListStyles.header}>
        <Text style={TodoListStyles.goBackButtonText} onPress={backToMainTasks}>
            Back
        </Text>
        <SettingsPage onLogout={onLogout} showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
      </View>
      <View style={TodoListStyles.tasksContainer}>{renderTasks()}</View>
      <View style={TodoListStyles.addTaskContainer}>
        <AddTask onAddTask={addTask} />
      </View>
    </View>
  );
};

export default TodoList;

