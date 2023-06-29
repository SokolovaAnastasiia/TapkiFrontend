import { StyleSheet } from 'react-native';

const TodoListStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    left: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 50,
  },
  goBackButtonText: {
    fontSize: 18,
    color: 'white',
  },
  tasksContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default TodoListStyles;


