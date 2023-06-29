// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';

// interface SettingsPageProps {
//   onLogout: () => void;
// }

// const SettingsPage: React.FC<SettingsPageProps> = ({ onLogout }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleLogout = () => {
//     onLogout();
//   };

//   return (
//     <View>
//       <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
//         <Text style={styles.settingsButtonText}>Settings</Text>
//       </TouchableOpacity>
//       <Modal visible={modalVisible} animationType="slide" transparent>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Settings</Text>
//             <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//               <Text style={styles.logoutButtonText}>Logout</Text>
//             </TouchableOpacity>
//             <Pressable style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
//               <Text style={styles.modalCloseButtonText}>Close</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     settingsButton: {
//         // position: 'absolute',
//         // top: 0, // Обновлено: изменено на 0
//         // right: 0, // Обновлено: изменено на 0
//         backgroundColor: '#FFFFFF',
//         padding: 8,
//         borderRadius: 4,
//         },
      
//   settingsButtonText: {
//     color: '#091941',
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContent: {
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     borderRadius: 4,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   logoutButton: {
//     backgroundColor: '#FFFFFF',
//     padding: 8,
//     borderRadius: 4,
//   },
//   logoutButtonText: {
//     color: '#091941',
//     fontSize: 16,
//   },
//   modalCloseButton: {
//     marginTop: 16,
//     alignSelf: 'center',
//   },
//   modalCloseButtonText: {
//     color: '#091941',
//     fontSize: 16,
//     textDecorationLine: 'underline',
//   },
// });

// export default SettingsPage;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Switch } from 'react-native';

interface SettingsPageProps {
  onLogout: () => void;
  showCompleted: boolean;
  setShowCompleted: (value: boolean) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onLogout, showCompleted, setShowCompleted }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState('ru');

  const handleLogout = () => {
    onLogout();
  };

  const toggleSwitch = () => setShowCompleted(!showCompleted);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <View>
      <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Settings</Text>
            <View style={styles.switchContainer}>
              <Text>Show Completed:</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={showCompleted ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={showCompleted}
              />
            </View>
            <View style={styles.languageContainer}>
              <Text>Language:</Text>
              <TouchableOpacity onPress={() => handleLanguageChange('en')}>
                <Text style={language === 'en' ? styles.languageButtonActive : styles.languageButton}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLanguageChange('ru')}>
                <Text style={language === 'ru' ? styles.languageButtonActive : styles.languageButton}>Русский</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
            <Pressable style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
    settingsButton: {
        // position: 'absolute',
        // top: 0, // Обновлено: изменено на 0
        // right: 0, // Обновлено: изменено на 0
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius: 4,
        },
      
  settingsButtonText: {
    color: '#091941',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 4,
  },
  logoutButtonText: {
    color: '#091941',
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
  modalCloseButtonText: {
    color: '#091941',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  languageButton: {
    padding: 10,
    color: 'grey'
  },
  languageButtonActive: {
    padding: 10,
    color: 'blue'
  }
});

export default SettingsPage;
