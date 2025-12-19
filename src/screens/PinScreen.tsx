import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const BackArrowIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path
      fill="#FFFFFF"
      d="M20,11H7.83l5.59,-5.59L12,4l-8,8 8,8 1.41,-1.41L7.83,13H20v-2z"
    />
  </Svg>
);

const BackspaceIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path
      fill="#FFFFFF"
      d="M22,3L7,3c-0.69,0 -1.23,0.35 -1.59,0.88L0,12l5.41,8.11c0.36,0.53 0.9,0.89 1.59,0.89L22,21c1.1,0 2,-0.9 2,-2L24,5c0,-1.1 -0.9,-2 -2,-2zM17.5,14.59L16.09,16 14,13.91 11.91,16 10.5,14.59 12.59,12.5 10.5,10.41 11.91,9 14,11.09 16.09,9 17.5,10.41 15.41,12.5 17.5,14.59z"
    />
  </Svg>
);

const FingerprintIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path
      fill="#FFFFFF"
      d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 17.99,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z"
    />
  </Svg>
);

const PinScreen = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (key: string) => {
    if (pin.length < 4) {
      const newPin = pin + key;
      setPin(newPin);
      
      if (newPin.length === 4) {
        handlePinComplete(newPin);
      }
    }
  };

  const handleBackspace = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handlePinComplete = (completedPin: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home' as never);
    }, 1500);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleForgotPassword = () => {
  };

  const renderPasswordBox = (index: number) => {
    const isFilled = pin.length > index;
    return (
      <View key={index} style={styles.passwordBox}>
        {isFilled && <Text style={styles.passwordDot}>*</Text>}
      </View>
    );
  };

  const renderNumericKey = (value: string) => (
    <TouchableOpacity
      key={value}
      style={styles.numericKey}
      onPress={() => handleKeyPress(value)}
      activeOpacity={0.6}>
      <Text style={styles.numericKeyText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#200020" />

      <TouchableOpacity
        style={styles.backArrow}
        onPress={handleBack}
        activeOpacity={0.7}>
        <BackArrowIcon />
      </TouchableOpacity>

      <Text style={styles.title}>Escribe tu clave</Text>

      <View style={styles.passwordBoxesContainer}>
        {[0, 1, 2, 3].map(index => renderPasswordBox(index))}
      </View>

      <Text style={styles.confirmText}>
        No dudamos que seas tú...{'\n'}Pero es mejor confirmar ;)
      </Text>

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#DA0081" />
        </View>
      )}

      <View style={styles.numericKeypad}>
        <View style={styles.keypadRow}>
          {renderNumericKey('1')}
          {renderNumericKey('2')}
          {renderNumericKey('3')}
        </View>
        <View style={styles.keypadRow}>
          {renderNumericKey('4')}
          {renderNumericKey('5')}
          {renderNumericKey('6')}
        </View>
        <View style={styles.keypadRow}>
          {renderNumericKey('7')}
          {renderNumericKey('8')}
          {renderNumericKey('9')}
        </View>
        <View style={styles.keypadRow}>
          <TouchableOpacity
            style={styles.numericKey}
            onPress={() => {}}
            activeOpacity={0.6}>
            <FingerprintIcon />
          </TouchableOpacity>
          {renderNumericKey('0')}
          <TouchableOpacity
            style={styles.numericKey}
            onPress={handleBackspace}
            activeOpacity={0.6}>
            <BackspaceIcon />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.forgotPasswordBtn}
        onPress={handleForgotPassword}
        activeOpacity={0.7}>
        <Text style={styles.forgotPasswordText}>Olvidé mi clave</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200020',
  },
  backArrow: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 54,
    marginLeft: 18,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  passwordBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    height: 55,
  },
  passwordBox: {
    width: 48,
    height: 48,
    marginHorizontal: 8,
    backgroundColor: '#EBE7F5',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordDot: {
    fontSize: 26,
    color: '#DA0081',
    fontWeight: '900',
    textShadowColor: '#DA0081',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  confirmText: {
    marginTop: 26,
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  numericKeypad: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  numericKey: {
    width: 50,
    height: 50,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  numericKeyEmpty: {
    width: 50,
    height: 50,
    marginHorizontal: 30,
  },
  numericKeyText: {
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  forgotPasswordBtn: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default PinScreen;

