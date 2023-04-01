// TaskStyles.ts

import { StyleSheet } from 'react-native';


const TaskStyles = StyleSheet.create({
  task: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  circle: {
    position: "relative",
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FE75F6",

    
  },
  incompleteCircle: {
    border: 1,
    backgroundColor: '#FE75F6',
    shadowColor: "#C546BC",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,

    elevation: 22,
  },
  highlights: {

  },
  completedCircle: {
    backgroundColor: '#2C004D',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  completedText: {
    fontSize: 14,
    color: '#aaa',
    textDecorationLine: 'line-through',
    textAlign: 'center',
  },
  completionButton: {
    width: '100%',
    height: 50,
    position: 'absolute',
    zIndex: 1,
  },
  incompleteButton: {
    backgroundColor: 'transparent',
  },
  completedButton: {
    backgroundColor: 'transparent',
  },
  circleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurCircle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default TaskStyles;
