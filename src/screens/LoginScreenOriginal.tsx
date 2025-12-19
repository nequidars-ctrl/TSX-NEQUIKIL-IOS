/**
 * LoginScreenOriginal.tsx
 * 
 * Conversión EXACTA del archivo vmok1.xml original de Nequi
 * Kotlin/XML → React Native/TypeScript
 */

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  Dimensions,
  Animated,
  Keyboard,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthService} from '../services/AuthService';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const LoginScreenOriginal: React.FC = () => {
  const navigation = useNavigation();
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dynamicKey, setDynamicKey] = useState('847295');
  const [progress, setProgress] = useState(100);
  const [loading, setLoading] = useState(false);
  const [showOptionsOverlay, setShowOptionsOverlay] = useState(false);
  const [showButtonsContainer, setShowButtonsContainer] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  
  useEffect(() => {
    const generateKey = () => {
      const newKey = Math.floor(100000 + Math.random() * 900000).toString();
      setDynamicKey(newKey);
      setProgress(100);
    };

    const keyInterval = setInterval(generateKey, 30000);
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - (100 / 30)));
    }, 1000);

    return () => {
      clearInterval(keyInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleLogin = async () => {
    if (!phoneNumber.trim() || phoneNumber.length < 10) {
      Alert.alert('Error', 'Ingresa un número de celular válido');
      return;
    }

    setLoading(true);
    try {
      const result = await AuthService.login(phoneNumber, dynamicKey);
      if (result.success) {
        navigation.navigate('Home' as never);
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const handleSendButton = () => {
    setShowButtonsContainer(!showButtonsContainer);
  };

  const handleHelp = () => {
    Alert.alert('Ayuda', 'Para ayuda, comunícate con la línea 300 600 0100');
  };

  const handleCopyDynamicKey = () => {
    Alert.alert('Clave dinámica', `Clave copiada: ${dynamicKey}`);
  };

  const handleOption1 = () => {
    setShowButtonsContainer(false);
    Alert.alert('Adquirir acceso', 'Funcionalidad de adquirir acceso');
  };

  const handleOption2 = () => {
    setShowButtonsContainer(false);
    Alert.alert('Usar QR', 'Funcionalidad de QR');
  };

  const handleCheckPayment = () => {
    setShowOptionsOverlay(false);
    Alert.alert('Comprobar un pago', 'Escanea el QR del comprobante');
  };

  const handleUseQr = () => {
    setShowOptionsOverlay(false);
    Alert.alert('Usar QR', 'Funcionalidad de QR');
  };

  const handleChangePhone = () => {
    Alert.alert('¿Cambiaste tu cel?', 'Contacta a soporte para cambiar tu número');
  };

  const logoVerticalBias = 0.37;
  const logoTopPosition = SCREEN_HEIGHT * logoVerticalBias - 66;

  return (
    <View style={styles.rootLoginLayout}>
      <StatusBar barStyle="light-content" backgroundColor="#200020" />

      {/* Error Notification - Gone */}
      {errorVisible && (
        <View style={styles.errorNotification}>
          <Text style={styles.errorText}>Error</Text>
        </View>
      )}

      {/* Logo Nequi - Centrado vertical bias 0.37 */}
      <Image
        source={require('../assets/images/login/nequi_logo.png')}
        style={[styles.ivNequiLogo, {top: logoTopPosition}]}
        resizeMode="contain"
      />

      {/* Phone Container - Input Teléfono */}
      <View style={styles.phoneContainerWrapper}>
        <View style={styles.phoneContainer}>
          <Text style={styles.tvPrefix}>+57</Text>
          <View style={styles.phoneSeparator} />
          <TextInput
            style={styles.etUsuario}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Ingresa tu cel"
            placeholderTextColor="#ffcccccc"
            keyboardType="phone-pad"
            maxLength={12}
          />
        </View>
      </View>

      {/* Botón Login "Entra" */}
      <View style={styles.btnLoginWrapper}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}>
          {!loading && (
            <Text style={styles.tvLoginText}>Entra</Text>
          )}
          {loading && (
            <ActivityIndicator
              size={24}
              color="#FFFFFF"
              style={styles.pbButton}
            />
          )}
        </TouchableOpacity>
      </View>

      {/* Botón Send "$" (ico_money) */}
      <TouchableOpacity
        style={styles.btnSend}
        onPress={handleSendButton}
        activeOpacity={0.8}>
        <Text style={styles.dollarText}>$</Text>
      </TouchableOpacity>

      {/* Options Overlay (Comprobar pago + Usar QR) */}
      {showOptionsOverlay && (
        <View style={styles.optionsOverlay}>
          <TouchableOpacity
            style={styles.optionsOverlayBackground}
            onPress={() => setShowOptionsOverlay(false)}
            activeOpacity={1}
          />
          
          <TouchableOpacity
            style={styles.btnCheckPayment}
            onPress={handleCheckPayment}
            activeOpacity={0.7}>
            <Text style={styles.optionText}>Comprobar un pago</Text>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>✓</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnUseQr}
            onPress={handleUseQr}
            activeOpacity={0.7}>
            <Text style={styles.optionText}>Usar QR</Text>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>⬜</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCloseCash}
            onPress={() => setShowOptionsOverlay(false)}
            activeOpacity={0.8}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Buttons Container (Adquirir acceso + Usar QR) */}
      {showButtonsContainer && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.optionRow}
            onPress={handleOption1}
            activeOpacity={0.7}>
            <Text style={styles.optionLabel}>Adquirir acceso</Text>
            <View style={styles.btnOption}>
              <Text style={styles.optionIconSmall}>🔑</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionRow}
            onPress={handleOption2}
            activeOpacity={0.7}>
            <Text style={styles.optionLabel}>Usar QR</Text>
            <View style={styles.btnOption}>
              <Text style={styles.optionIconSmall}>📷</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Progress Bar - Shown during loading */}
      {loading && (
        <ActivityIndicator
          size={30}
          color="#DA0081"
          style={styles.progressBar}
        />
      )}

      {/* Bottom Container - "¿Cambiaste tu cel?" + Bancolombia */}
      <View style={styles.bottomContainer}>
        <View style={styles.ivCellIcon}>
          <Text style={styles.cellIcon}>📱</Text>
        </View>
        <TouchableOpacity onPress={handleChangePhone} activeOpacity={0.7}>
          <Text style={styles.tvCellChangeText}>¿Cambiaste tu cel?</Text>
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <View style={styles.bancolombiaContainer}>
          <Text style={styles.byText}>by </Text>
          <View style={styles.bancolombiaCircle}>
            <Text style={styles.bancolombiaText}>●</Text>
          </View>
        </View>
      </View>

      {/* App Version - Hidden */}
      {/* <Text style={styles.tvAppVersion}>v1.0.0</Text> */}

      {/* Botón Ayuda - Top Right */}
      <TouchableOpacity
        style={styles.ivInfo}
        onPress={handleHelp}
        activeOpacity={0.7}>
        <Text style={styles.helpIcon}>?</Text>
        <Text style={styles.helpText}>Ayuda</Text>
      </TouchableOpacity>

      {/* Dynamic Key Container - Top Left */}
      <TouchableOpacity
        style={styles.dynamicKeyContainer}
        onPress={handleCopyDynamicKey}
        activeOpacity={0.7}>
        {/* Ring Progress View */}
        <View style={styles.ringProgressView}>
          <View style={[styles.ringProgress, {opacity: progress / 100}]} />
        </View>
        
        <View style={styles.dynamicKeyContent}>
          <Text style={styles.dynamicKeyLabel}>Clave dinámica</Text>
          <Text style={styles.dynamicKeyValue}>{dynamicKey}</Text>
        </View>

        <View style={styles.ivCopy}>
          <Text style={styles.copyIcon}>📋</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rootLoginLayout: {
    flex: 1,
    backgroundColor: '#200020', // @color/color_200020
    width: '100%',
    height: '100%',
  },

  errorNotification: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF0000',
    padding: 12,
    zIndex: 100,
  },
  errorText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },

  ivNequiLogo: {
    position: 'absolute',
    width: 225,
    height: 132,
    left: (SCREEN_WIDTH - 225) / 2,
  },

  phoneContainerWrapper: {
    position: 'absolute',
    bottom: 90, // marginBottom 20 + btnLogin height 48 + marginBottom 22
    left: 16,
    right: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)', // @drawable/login_field_background
    height: 54,
  },
  tvPrefix: {
    fontSize: 15,
    color: '#FFB6D1', // #ffffb6d1
    fontFamily: 'Manrope-Regular',
    paddingStart: 12,
    paddingEnd: 8,
  },
  phoneSeparator: {
    width: 1,
    height: 24,
    backgroundColor: '#200020',
    marginEnd: 8,
  },
  etUsuario: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    padding: 12,
  },

  btnLoginWrapper: {
    position: 'absolute',
    bottom: 38, // marginBottom 22 + bottomContainer
    left: 16,
    right: 70, // width btnSend 48 + margin 6 + marginEnd 16
  },
  btnLogin: {
    height: 48,
    backgroundColor: '#DA0081', // @drawable/button_login_bg
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  tvLoginText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Manrope-Medium',
  },
  pbButton: {
    width: 24,
    height: 24,
  },

  btnSend: {
    position: 'absolute',
    bottom: 38,
    right: 16,
    width: 48,
    height: 48,
    backgroundColor: '#DA0081',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  dollarText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  optionsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
    zIndex: 10,
  },
  optionsOverlayBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // #80000000
  },
  btnCheckPayment: {
    position: 'absolute',
    bottom: 156, // calculado según constraints
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 16,
    paddingTop: 16,
    paddingBottom: 4,
  },
  btnUseQr: {
    position: 'absolute',
    bottom: 96,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 16,
    paddingVertical: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Manrope-Medium',
    marginEnd: 16,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DA0081',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  btnCloseCash: {
    position: 'absolute',
    bottom: 84,
    right: 16,
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: '#000000',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 76, // 22 marginBottom + 48 btnSend + 6 margin
    right: 16,
    elevation: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionLabel: {
    width: 120,
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Manrope-Medium',
    textAlign: 'right',
    marginEnd: 8,
  },
  btnOption: {
    width: 40,
    height: 40,
    backgroundColor: '#DA0081',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionIconSmall: {
    fontSize: 20,
  },

  progressBar: {
    position: 'absolute',
    bottom: 76,
    alignSelf: 'center',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ivCellIcon: {
    width: 46,
    height: 46,
    marginStart: -13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellIcon: {
    fontSize: 24,
  },
  tvCellChangeText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Manrope-Regular',
  },
  bancolombiaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  byText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  bancolombiaCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bancolombiaText: {
    fontSize: 10,
    color: '#FFDD00',
    fontWeight: '700',
  },

  tvAppVersion: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'Manrope-Regular',
  },

  ivInfo: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 40,
    elevation: 2,
  },
  helpIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    marginEnd: 8,
  },
  helpText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontFamily: 'Manrope-Regular',
  },

  dynamicKeyContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#37195B', // @drawable/dynamic_key_background
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    minHeight: 40,
    minWidth: 120,
    elevation: 4,
  },
  ringProgressView: {
    width: 20,
    height: 20,
    marginEnd: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringProgress: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  dynamicKeyContent: {
    marginEnd: 8,
  },
  dynamicKeyLabel: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: 'Manrope-Regular',
  },
  dynamicKeyValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Manrope-Bold',
    letterSpacing: 0.1,
    marginTop: -6,
  },
  ivCopy: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyIcon: {
    fontSize: 16,
  },
});

export default LoginScreenOriginal;
