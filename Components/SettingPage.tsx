import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Switch } from 'react-native';

interface SettingsPageProps {
  onLogout: () => void;
  showCompleted: boolean;
  setShowCompleted: (value: boolean) => void;
  notificationsEnabled: boolean;
  setNotificationsEnabled: (value: boolean) => void;
  soundEffectsEnabled: boolean;
  setSoundEffectsEnabled: (value: boolean) => void;
}

interface LanguageTranslations {
  language: string;
  settings: string;
  languageLabel: string;
  showCompleted: string;
  notifications: string;
  soundEffects: string;
  appearance: string;
  logout: string;
  close: string;
  languageRussian: string;
  languageEnglish: string;
}

const SettingsPage: React.FC<SettingsPageProps> = ({
  onLogout,
  showCompleted,
  setShowCompleted,
  notificationsEnabled,
  setNotificationsEnabled,
  soundEffectsEnabled,
  setSoundEffectsEnabled,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState('ru');
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const handleLogout = () => {
    onLogout();
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const toggleNotificationsEnabled = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleSoundEffectsEnabled = () => {
    setSoundEffectsEnabled(!soundEffectsEnabled);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  // Переводы на русский язык
  const translationsRu: LanguageTranslations = {
    language: 'Язык:',
    settings: 'Настройки',
    languageLabel: 'Язык:',
    showCompleted: 'Показывать выполненные:',
    notifications: 'Уведомления:',
    soundEffects: 'Звуковые эффекты:',
    appearance: 'Оформление:',
    logout: 'Выйти',
    close: 'Закрыть',
    languageRussian: 'Русский',
    languageEnglish: 'Английский',
  };

  // Переводы на английский язык
  const translationsEn: LanguageTranslations = {
    language: 'Language:',
    settings: 'Settings',
    languageLabel: 'Language:',
    showCompleted: 'Show completed:',
    notifications: 'Notifications:',
    soundEffects: 'Sound Effects:',
    appearance: 'Appearance:',
    logout: 'Logout',
    close: 'Close',
    languageRussian: 'Russian',
    languageEnglish: 'English',
  };

  // Выбор используемых переводов в зависимости от текущего языка
  const translations = language === 'ru' ? translationsRu : translationsEn;

  return (
    <View>
      <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.settingsButtonText}>{translations.settings}</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{translations.settings}</Text>
            <TouchableOpacity style={styles.languageContainer} onPress={toggleLanguageDropdown}>
              <Text>{translations.languageLabel}</Text>
              <Text style={styles.selectedLanguage}>{language}</Text>
              <Text style={styles.dropdownIcon}>{languageDropdownVisible ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {languageDropdownVisible && (
              <View style={styles.languageOptions}>
                <TouchableOpacity onPress={() => handleLanguageChange('en')}>
                  <Text style={language === 'en' ? styles.languageButtonActive : styles.languageButton}>
                    {translations.languageEnglish}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLanguageChange('ru')}>
                  <Text style={language === 'ru' ? styles.languageButtonActive : styles.languageButton}>
                    {translations.languageRussian}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.switchContainer}>
              <Text>{translations.showCompleted}</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={showCompleted ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleShowCompleted}
                value={showCompleted}
              />
            </View>
            <View style={styles.switchContainer}>
              <Text>{translations.notifications}</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNotificationsEnabled}
                value={notificationsEnabled}
              />
            </View>
            <View style={styles.switchContainer}>
              <Text>{translations.soundEffects}</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={soundEffectsEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSoundEffectsEnabled}
                value={soundEffectsEnabled}
              />
            </View>
            {/* Дополнительные пункты настроек */}
            <View style={styles.additionalSettingsContainer}>
              <Text>{translations.appearance}</Text>
              {/* Выпадающий список с оформлением */}
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>{translations.logout}</Text>
            </TouchableOpacity>
            <Pressable style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>{translations.close}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsButton: {
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
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  selectedLanguage: {
    padding: 10,
    color: '#091941',
    fontWeight: 'bold',
  },
  dropdownIcon: {
    fontSize: 16,
  },
  languageOptions: {
    marginTop: 10,
  },
  languageButton: {
    padding: 10,
    color: 'grey',
  },
  languageButtonActive: {
    padding: 10,
    color: 'blue',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  additionalSettingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default SettingsPage;
 
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Switch } from 'react-native';

// interface SettingsPageProps {
//   onLogout: () => void;
//   showCompleted: boolean;
//   setShowCompleted: (value: boolean) => void;
// }

// const SettingsPage: React.FC<SettingsPageProps> = ({ onLogout, showCompleted, setShowCompleted }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [language, setLanguage] = useState('ru');

//   const handleLogout = () => {
//     onLogout();
//   };

//   const toggleSwitch = () => setShowCompleted(!showCompleted);

//   const handleLanguageChange = (lang: string) => {
//     setLanguage(lang);
//   };

//   return (
//     <View>
//       <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
//         <Text style={styles.settingsButtonText}>Settings</Text>
//       </TouchableOpacity>
//       <Modal visible={modalVisible} animationType="slide" transparent>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Настройки</Text>
//             <View style={styles.switchContainer}>
//               <Text>Показать выполненные:</Text>
//               <Switch
//                 trackColor={{ false: "#767577", true: "#81b0ff" }}
//                 thumbColor={showCompleted ? "#f5dd4b" : "#f4f3f4"}
//                 ios_backgroundColor="#3e3e3e"
//                 onValueChange={toggleSwitch}
//                 value={showCompleted}
//               />
//             </View>
//             <View style={styles.languageContainer}>
//               <Text>Язык:</Text>
//               <TouchableOpacity onPress={() => handleLanguageChange('en')}>
//                 <Text style={language === 'en' ? styles.languageButtonActive : styles.languageButton}>English</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => handleLanguageChange('ru')}>
//                 <Text style={language === 'ru' ? styles.languageButtonActive : styles.languageButton}>Русский</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//               <Text style={styles.logoutButtonText}>Выйти</Text>
//             </TouchableOpacity>
//             <Pressable style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
//               <Text style={styles.modalCloseButtonText}>Закрыть</Text>
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
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginVertical: 10,
//   },
//   languageContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginVertical: 10,
//   },
//   languageButton: {
//     padding: 10,
//     color: 'grey'
//   },
//   languageButtonActive: {
//     padding: 10,
//     color: 'blue'
//   }
// });

// export default SettingsPage;
