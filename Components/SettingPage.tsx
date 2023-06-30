import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Switch, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Image } from 'react-native';


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
      <Image source={{uri: 'https://media.discordapp.net/attachments/1090678543580663832/1124210093869772850/Gear-icon.png?width=142&height=142'}} style={styles.settingsIcon} />
      </TouchableOpacity>


      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <BlurView style={styles.blurContainer} intensity={100} tint="dark">
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{translations.settings}</Text>
              <TouchableOpacity style={styles.languageContainer} onPress={toggleLanguageDropdown}>
                <Text style={styles.labelText}>{translations.languageLabel}</Text>
                <View style={styles.languageSelection}>
                  <Text style={styles.selectedLanguage}>{language}</Text>
                  <Text style={styles.dropdownIcon}>{languageDropdownVisible ? '▲' : '▼'}</Text>
                </View>
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
                <Text style={styles.labelText}>{translations.showCompleted}</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={showCompleted ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleShowCompleted}
                  value={showCompleted}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text style={styles.labelText}>{translations.notifications}</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleNotificationsEnabled}
                  value={notificationsEnabled}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text style={styles.labelText}>{translations.soundEffects}</Text>
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
                <Text style={styles.labelText}>{translations.appearance}</Text>
                {/* Выпадающий список с оформлением */}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                  <Text style={styles.logoutButtonText}>{translations.logout}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.helpButton}>
                  <Text style={styles.helpButtonText}>Помощь</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewButton}>
                  <Text style={styles.reviewButtonText}>Оставить отзыв</Text>
                </TouchableOpacity>
              </View>
              <Pressable style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCloseButtonText}>{translations.close}</Text>
              </Pressable>
            </View>
          </BlurView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsButton: {
    // backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 4,
  },
  settingsButtonText: {
    color: '#091941',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(9, 25, 65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#091941',
    padding: 16,
    borderRadius: 4,
    width: Platform.select({ web: '40%', default: '80%' }),
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoutButtonText: {
    color: '#091941',
    fontSize: 16,
    textAlign: 'center',
  },
  helpButton: {
    backgroundColor: 'transparent',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  helpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  reviewButton: {
    backgroundColor: 'transparent',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  modalCloseButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
  modalCloseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  labelText: {
    color: '#FFFFFF',
  },
  languageSelection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedLanguage: {
    paddingHorizontal: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  dropdownIcon: {
    fontSize: 16,
    color: '#FFFFFF',
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
  buttonContainer: {
    marginTop: 16,
  },
  settingsIcon: Platform.select({
    default: {
      width: 30,
      height: 30,
    },
    web: {
      width: 60,
      height: 60,
    }
    
  })
    
});

export default SettingsPage;
