import { StyleSheet } from 'react-native';

const AddTaskStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
    color: "#fff"
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 32,
    lineHeight: 32,
  },
});

export default AddTaskStyles;
