// import { StyleSheet } from 'react-native';

// const TaskStyles = StyleSheet.create({
//   task: {
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   circle: {
//     position: "relative",
//     width: 120,
//     height: 120,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 60, 
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: "#FE75F6",
//     overflow: 'hidden',
//   },
//   incompleteCircle: {
//     border: 1,
//     backgroundColor: '#FE75F6',
//     shadowColor: "#C546BC",
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0.6,
//     shadowRadius: 20,

//     elevation: 22,
//   },
//   highlights: {

//   },
//   completedCircle: {
//     backgroundColor: '#2C004D',
//   },
//   text: {
//     fontSize: 18,
//     color: '#fff',
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   completedText: {
//     fontSize: 14,
//     color: '#aaa',
//     textDecorationLine: 'line-through',
//     textAlign: 'center',
//   },
//   completionButton: {
//     width: '100%',
//     height: 50,
//     position: 'absolute',
//     zIndex: 2,
//   },
//   incompleteButton: {
//     backgroundColor: 'transparent',
//   },
//   completedButton: {
//     backgroundColor: 'transparent',
//   },
//   circleContainer: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   blurCircle: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     borderRadius: 60,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     zIndex: -2,
//   },
//   wave: {
//     position: 'absolute',
//     width: '200%',
//     height: '200%',
//     borderRadius: 120,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     zIndex: -3,
//   },

// });

// export default TaskStyles;

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
    borderRadius: 60, 
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#cd34db00',
    shadowColor: "#9E17FF",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 16,
    shadowRadius: 10,
  },
  incompleteCircle: {
    border: 1,
    backgroundColor: '#2C004D',
  },
  completedCircle: {
    backgroundColor: '#233667',
    shadowColor: "#332796",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 16,
    shadowRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    zIndex: 1,
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
    zIndex: 2,
  },
  incompleteButton: {
    backgroundColor: 'transparent',
  },
  completedButton: {
    backgroundColor: 'transparent',
  },
  wave: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    borderRadius: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: -1,
  },
  smallCircle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  
});

export default TaskStyles;
