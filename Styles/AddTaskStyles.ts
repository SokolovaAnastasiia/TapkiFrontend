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
    backgroundColor: '#233667',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  addButtonText: {
    color: 'white',
    fontSize: 32,
    lineHeight: 32,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default AddTaskStyles;
