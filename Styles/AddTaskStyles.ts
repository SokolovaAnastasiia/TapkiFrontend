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
  },
  // Add other styles if needed
});

export default AddTaskStyles;
