import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  StatusBar,
  Dimensions,
  Clipboard,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Svg, {Path, G, ClipPath, Defs, Rect} from 'react-native-svg';
import {AuthService} from '../services/AuthService';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const NequiLogo = () => (
  <Svg width={225} height={132} viewBox="0 0 103 33">
    <G>
      <ClipPath id="clip">
        <Rect x="0" y="0" width="103" height="33" />
      </ClipPath>
      <Path fill="#DA0081" d="M5.25,0H0.91C0.41,0 0,0.42 0,0.94V4.75C0,5.27 0.41,5.69 0.91,5.69H5.25C5.75,5.69 6.16,5.27 6.16,4.75V0.94C6.16,0.42 5.75,0 5.25,0Z" />
      <Path fill="#FFFFFF" d="M31.68,0H27.95C27.44,0 27.04,0.43 27.04,0.94V16.37C27.04,16.68 26.64,16.8 26.5,16.52L17.82,0.41C17.67,0.15 17.42,0 17.12,0H10.91C10.4,0 10,0.43 10,0.94V25.59C10,26.12 10.42,26.53 10.91,26.53H14.64C15.15,26.53 15.55,26.1 15.55,25.59V9.7C15.55,9.39 15.95,9.27 16.09,9.55L25.01,26.14C25.16,26.4 25.41,26.55 25.71,26.55H31.65C32.16,26.55 32.56,26.12 32.56,25.61V0.94C32.56,0.41 32.14,0 31.65,0H31.68Z" />
      <Path fill="#FFFFFF" d="M54.12,16.91C54.12,9.97 49.75,6.52 44.95,6.52C38.71,6.52 35.16,10.99 35.16,17.03C35.16,23.89 39.62,27.16 44.81,27.16C49.99,27.16 53.02,24.39 53.84,20.79C53.95,20.33 53.69,19.92 53.02,19.92H50.09C49.75,19.92 49.47,20.1 49.32,20.44C48.59,22.11 47.41,22.98 45.14,22.98C42.58,22.98 40.85,21.32 40.6,17.94H53.22C53.76,17.94 54.12,17.52 54.12,16.91ZM40.8,14.29C41.35,11.8 42.75,10.69 44.87,10.69C46.77,10.69 48.4,11.83 48.62,14.29H40.8Z" />
      <Path fill="#FFFFFF" d="M102.09,7.01H98.34C97.84,7.01 97.43,7.43 97.43,7.95V25.61C97.43,26.13 97.84,26.55 98.34,26.55H102.09C102.59,26.55 103,26.13 103,25.61V7.95C103,7.43 102.59,7.01 102.09,7.01Z" />
      <Path fill="#FFFFFF" d="M74.26,7.01H70.52C70.01,7.01 69.61,7.44 69.61,7.95V8.91C68.5,7.56 66.66,6.62 64.25,6.62C58.86,6.62 56.01,11.67 56.01,17.01C56.01,21.68 58.35,26.91 64.14,26.91C66.22,26.91 68.42,25.89 69.61,24.44V32.03C69.61,32.55 70.03,32.97 70.52,32.97H74.26C74.77,32.97 75.16,32.54 75.16,32.03V7.97C75.16,7.44 74.75,7.03 74.26,7.03V7.01ZM65.75,22.75C63.3,22.75 61.57,20.89 61.57,16.88C61.57,12.87 63.3,10.77 65.75,10.77C68.21,10.77 69.93,12.7 69.93,16.88C69.93,21.05 68.21,22.75 65.75,22.75Z" />
      <Path fill="#FFFFFF" d="M94.13,7.01H90.4C89.89,7.01 89.49,7.44 89.49,7.95V17.94C89.49,21.15 88.1,22.09 86.33,22.09C84.56,22.09 83.17,21.15 83.17,17.94V7.95C83.17,7.43 82.76,7.01 82.26,7.01H78.53C78.02,7.01 77.62,7.44 77.62,7.95V18.35C77.62,24.54 80.92,27.03 86.35,27.03C91.77,27.03 95.07,24.52 95.07,18.35V7.95C95.07,7.43 94.66,7.01 94.16,7.01H94.13Z" />
    </G>
  </Svg>
);

const CopyIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path fill="none" stroke="#FFFFFF" strokeWidth={1.5} strokeLinejoin="round" d="M19.078,6H8.672C7.196,6 6,7.196 6,8.672V19.078C6,20.554 7.196,21.75 8.672,21.75H19.078C20.554,21.75 21.75,20.554 21.75,19.078V8.672C21.75,7.196 20.554,6 19.078,6Z" />
    <Path fill="none" stroke="#FFFFFF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M17.977,6L18,4.875C17.998,4.179 17.721,3.513 17.229,3.021C16.737,2.529 16.071,2.252 15.375,2.25H5.25C4.455,2.252 3.693,2.569 3.131,3.131C2.569,3.693 2.252,4.455 2.25,5.25V15.375C2.252,16.071 2.529,16.737 3.021,17.229C3.513,17.721 4.179,17.998 4.875,18H6" />
  </Svg>
);

const HelpIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path fill="none" stroke="#FFFFFF" strokeWidth={2} d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z" />
    <Path fill="#FFFFFF" d="M12,17L12,17c-0.55,0 -1,-0.45 -1,-1v-0.01c0,-0.55 0.45,-0.99 1,-0.99s1,0.45 1,1S12.55,17 12,17zM13.22,12.39c-0.39,0.39 -0.39,0.54 -0.39,1.11 0,0.55 -0.45,1 -1,1s-1,-0.45 -1,-1c0,-1.38 0.61,-2.03 1.61,-3.03C12.76,10.14 13,9.79 13,9.5c0,-0.83 -0.67,-1.5 -1.5,-1.5S10,8.67 10,9.5c0,0.55 -0.45,1 -1,1s-1,-0.45 -1,-1c0,-1.93 1.57,-3.5 3.5,-3.5s3.5,1.57 3.5,3.5c0,1.02 -0.55,1.77 -1.78,3z" />
  </Svg>
);

const DollarIcon = () => (
  <Svg width={17} height={32} viewBox="0 0 17 32">
    <Path fill="#FFFFFF" d="M7.174,30V26.353H10.018V30H7.174ZM7.174,4.662V1H10.018V4.662H7.174ZM8.82,27.348C7.264,27.348 5.864,27.074 4.617,26.527C3.382,25.969 2.365,25.185 1.566,24.175C0.767,23.154 0.245,21.954 0,20.575L2.796,20.118C3.137,21.517 3.856,22.628 4.953,23.449C6.061,24.27 7.392,24.68 8.947,24.68C10.513,24.68 11.781,24.306 12.75,23.559C13.719,22.812 14.204,21.849 14.204,20.67C14.204,19.807 13.943,19.112 13.421,18.586C12.91,18.06 12.047,17.613 10.833,17.244L5.576,15.634C2.434,14.666 0.863,12.814 0.863,10.077C0.863,8.793 1.177,7.672 1.805,6.715C2.445,5.747 3.334,4.999 4.474,4.473C5.624,3.936 6.961,3.673 8.484,3.684C9.965,3.694 11.285,3.968 12.446,4.505C13.608,5.031 14.566,5.789 15.322,6.778C16.089,7.767 16.606,8.951 16.872,10.33L13.996,10.851C13.847,9.956 13.517,9.172 13.006,8.499C12.505,7.825 11.866,7.304 11.088,6.936C10.311,6.557 9.437,6.362 8.468,6.352C7.563,6.341 6.748,6.488 6.023,6.794C5.31,7.099 4.745,7.525 4.33,8.072C3.914,8.62 3.707,9.246 3.707,9.951C3.707,10.719 3.994,11.372 4.57,11.908C5.155,12.435 6.071,12.887 7.318,13.266L11.632,14.529C13.528,15.087 14.896,15.839 15.738,16.787C16.579,17.723 17,18.976 17,20.544C17,21.902 16.659,23.091 15.977,24.112C15.306,25.132 14.353,25.927 13.118,26.495C11.892,27.064 10.46,27.348 8.82,27.348Z" />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={36} height={55} viewBox="0 0 48 48">
    <Path fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M27.75,12.75H20.25C19.007,12.75 18,13.757 18,15V33C18,34.243 19.007,35.25 20.25,35.25H27.75C28.993,35.25 30,34.243 30,33V15C30,13.757 28.993,12.75 27.75,12.75Z" />
    <Path fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M20.25,12.75H21.375C21.475,12.75 21.57,12.79 21.64,12.86C21.711,12.93 21.75,13.026 21.75,13.125C21.75,13.324 21.829,13.515 21.97,13.655C22.11,13.796 22.301,13.875 22.5,13.875H25.5C25.699,13.875 25.89,13.796 26.03,13.655C26.171,13.515 26.25,13.324 26.25,13.125C26.25,13.026 26.289,12.93 26.36,12.86C26.43,12.79 26.525,12.75 26.625,12.75H27.75" />
  </Svg>
);

const ByBancolombiaIcon = () => (
  <Svg width={48} height={24} viewBox="0 0 48 24">
    <Path fill="#FFFFFF" fillOpacity={0.5} fillRule="evenodd" d="M42.278,17.611C43.386,15.976 43.985,14.051 44,12.077C44.007,9.414 42.957,6.857 41.08,4.968C39.204,3.079 36.654,2.011 33.991,2C32.017,2.002 30.088,2.588 28.446,3.684C26.804,4.781 25.524,6.339 24.766,8.162C24.008,9.985 23.807,11.991 24.188,13.928C24.568,15.865 25.514,17.646 26.905,19.047C28.296,20.448 30.071,21.406 32.005,21.799C33.94,22.193 35.948,22.006 37.776,21.26C39.604,20.515 41.171,19.245 42.278,17.611ZM29.552,9.975C29.51,9.921 29.48,9.858 29.464,9.792C29.369,9.475 29.316,9.233 29.266,9.004C29.205,8.723 29.148,8.461 29.021,8.104C28.99,7.954 29.016,7.798 29.093,7.666C29.17,7.534 29.293,7.435 29.439,7.388C31.745,6.728 34.099,6.252 36.481,5.964C36.613,5.955 36.744,5.989 36.855,6.061C36.966,6.133 37.05,6.24 37.095,6.365C37.201,6.676 37.284,6.908 37.367,7.141L37.367,7.141L37.367,7.141L37.367,7.141L37.367,7.141C37.45,7.373 37.534,7.605 37.64,7.916C37.669,7.978 37.682,8.045 37.68,8.113C37.678,8.181 37.66,8.247 37.628,8.307C37.596,8.367 37.55,8.418 37.494,8.457C37.439,8.495 37.375,8.521 37.308,8.53C34.869,8.875 32.46,9.408 30.104,10.125C30.04,10.15 29.972,10.161 29.904,10.157C29.836,10.154 29.769,10.135 29.708,10.104C29.648,10.073 29.594,10.028 29.552,9.975ZM39.072,10.082C39.036,9.955 38.958,9.844 38.852,9.767C38.745,9.69 38.616,9.651 38.484,9.656C34.732,10.098 31.067,11.092 27.606,12.605C27.48,12.671 27.377,12.775 27.313,12.902C27.249,13.029 27.226,13.172 27.248,13.313L27.255,13.35L27.255,13.35C27.395,14.067 27.463,14.416 27.606,15.12C27.611,15.189 27.634,15.255 27.673,15.313C27.711,15.37 27.764,15.416 27.826,15.447C27.888,15.478 27.956,15.492 28.025,15.489C28.094,15.486 28.161,15.464 28.219,15.427C31.752,13.852 35.479,12.757 39.302,12.171C39.364,12.158 39.422,12.131 39.472,12.092C39.522,12.053 39.562,12.003 39.589,11.946C39.616,11.889 39.63,11.827 39.629,11.764C39.628,11.701 39.613,11.639 39.584,11.582C39.508,11.363 39.448,11.177 39.391,11.003C39.294,10.704 39.207,10.437 39.072,10.082ZM38.837,13.766C38.952,13.844 39.036,13.962 39.072,14.097L39.55,15.64C39.572,15.697 39.582,15.757 39.581,15.818C39.579,15.878 39.566,15.938 39.542,15.994C39.517,16.049 39.482,16.099 39.438,16.141C39.394,16.183 39.342,16.215 39.285,16.237C36.95,16.807 34.647,17.504 32.388,18.326C32.313,18.354 32.234,18.368 32.153,18.365C32.073,18.363 31.994,18.344 31.921,18.311C31.848,18.278 31.783,18.23 31.728,18.171C31.674,18.112 31.632,18.043 31.604,17.968C31.527,17.675 31.469,17.447 31.416,17.232C31.34,16.928 31.271,16.653 31.161,16.263C31.127,16.122 31.147,15.973 31.216,15.846C31.285,15.718 31.399,15.621 31.536,15.572C33.797,14.799 36.103,14.164 38.441,13.671C38.58,13.654 38.721,13.688 38.837,13.766Z" />
    <Path fill="#FFFFFF" fillOpacity={0.5} d="M6.518,15.894C7.078,16.72 8.058,17.168 8.996,17.168C11.04,17.168 12.384,15.656 12.384,13.724C12.384,11.792 11.04,10.28 8.996,10.28C8.058,10.28 7.078,10.728 6.518,11.582H6.49V6.416H5.538V17H6.49V15.894H6.518ZM11.376,13.724C11.376,15.18 10.48,16.356 8.898,16.356C7.428,16.356 6.378,15.222 6.378,13.724C6.378,12.226 7.428,11.078 8.898,11.078C10.48,11.078 11.376,12.268 11.376,13.724ZM14.452,10.448H13.388L16.188,16.986L15.656,18.358C15.376,19.1 15.04,19.52 14.396,19.52C14.144,19.52 13.906,19.478 13.696,19.408L13.598,20.276C13.878,20.332 14.172,20.36 14.452,20.36C15.586,20.36 16.118,19.702 16.51,18.694L19.772,10.448H18.736L16.706,15.978H16.678L14.452,10.448Z" />
  </Svg>
);

const RingProgress = ({progress}: {progress: number}) => (
  <View style={styles.ringProgressView}>
    <Svg width={22} height={22} viewBox="0 0 22 22">
      <Path
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={3}
        d="M11,3 A8,8 0 1,1 11,19 A8,8 0 1,1 11,3"
      />
      <Path
        fill="none"
        stroke="#DA0081"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={`${((100 - progress) / 100) * 50.27} 50.27`}
        d="M11,3 A8,8 0 1,1 11,19 A8,8 0 1,1 11,3"
      />
    </Svg>
  </View>
);

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dynamicKey, setDynamicKey] = useState('847295');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  const formatPhoneNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = '';
    if (cleaned.length > 0) {
      formatted = cleaned.substring(0, 3);
    }
    if (cleaned.length > 3) {
      formatted += ' ' + cleaned.substring(3, 6);
    }
    if (cleaned.length > 6) {
      formatted += ' ' + cleaned.substring(6, 10);
    }
    return formatted;
  };

  const handlePhoneChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
  };
  const [progress, setProgress] = useState(100);
  const [loading, setLoading] = useState(false);
  const [showOptionsOverlay, setShowOptionsOverlay] = useState(false);
  
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
      navigation.navigate('Pin' as never);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const handleSendButton = () => {
    setShowOptionsOverlay(!showOptionsOverlay);
  };

  const handleHelp = () => {
    Alert.alert('Ayuda', 'Para ayuda, comunícate con la línea 300 600 0100');
  };

  const handleCopyDynamicKey = () => {
    Clipboard.setString(dynamicKey);
    Alert.alert('Clave dinámica', `Clave copiada: ${dynamicKey}`);
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
  const logoTopPosition = keyboardVisible ? 80 : SCREEN_HEIGHT * logoVerticalBias - 66;

  return (
    <View style={styles.rootLoginLayout}>
      <StatusBar barStyle="light-content" backgroundColor="#200020" />

      <TouchableOpacity
        style={styles.dynamicKeyContainer}
        onPress={handleCopyDynamicKey}
        activeOpacity={0.7}>
        <RingProgress progress={progress} />
        <View style={styles.dynamicKeyContent}>
          <Text style={styles.dynamicKeyLabel}>Clave dinámica</Text>
          <Text style={styles.dynamicKeyValue}>{dynamicKey}</Text>
        </View>
        <CopyIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ivInfo}
        onPress={handleHelp}
        activeOpacity={0.7}>
        <HelpIcon />
        <Text style={styles.helpText}>Ayuda</Text>
      </TouchableOpacity>

      <View style={[styles.ivNequiLogo, {top: logoTopPosition}]}>
        <NequiLogo />
      </View>

      <View style={styles.phoneContainerWrapper}>
        <View style={styles.phoneContainer}>
          <Text style={styles.tvPrefix}>+57</Text>
          <View style={styles.phoneSeparator} />
          <TextInput
            style={styles.etUsuario}
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            placeholder="Ingresa tu cel"
            placeholderTextColor="#999999"
            keyboardType="phone-pad"
            maxLength={12}
          />
        </View>
      </View>

      <View style={styles.btnLoginWrapper}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}>
          {!loading && <Text style={styles.tvLoginText}>Entra</Text>}
          {loading && <ActivityIndicator size={24} color="#FFFFFF" />}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btnSend}
        onPress={handleSendButton}
        activeOpacity={0.8}>
        <DollarIcon />
      </TouchableOpacity>

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

      <View style={styles.bottomContainer}>
        <PhoneIcon />
        <TouchableOpacity onPress={handleChangePhone} activeOpacity={0.7}>
          <Text style={styles.tvCellChangeText}>¿Cambiaste tu cel?</Text>
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <ByBancolombiaIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootLoginLayout: {
    flex: 1,
    backgroundColor: '#200020',
  },

  dynamicKeyContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A3256',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    minHeight: 32,
    elevation: 4,
  },
  ringProgressView: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  dynamicKeyContent: {
    marginRight: 8,
  },
  dynamicKeyLabel: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  dynamicKeyValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginTop: -2,
  },

  ivInfo: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  helpText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },

  ivNequiLogo: {
    position: 'absolute',
    left: (SCREEN_WIDTH - 225) / 2,
    width: 225,
    height: 132,
    justifyContent: 'center',
    alignItems: 'center',
  },

  phoneContainerWrapper: {
    position: 'absolute',
    bottom: 160,
    left: 16,
    right: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    height: 54,
  },
  tvPrefix: {
    fontSize: 15,
    color: '#FFB6D1',
    paddingLeft: 16,
    paddingRight: 8,
  },
  phoneSeparator: {
    width: 1,
    height: 24,
    backgroundColor: '#200020',
    marginRight: 8,
  },
  etUsuario: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingRight: 16,
  },

  btnLoginWrapper: {
    position: 'absolute',
    bottom: 86,
    left: 16,
    right: 70,
  },
  btnLogin: {
    height: 48,
    backgroundColor: '#DA0081',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  tvLoginText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },

  btnSend: {
    position: 'absolute',
    bottom: 86,
    right: 16,
    width: 48,
    height: 48,
    backgroundColor: '#DA0081',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  btnCheckPayment: {
    position: 'absolute',
    bottom: 200,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnUseQr: {
    position: 'absolute',
    bottom: 140,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginRight: 16,
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
    bottom: 80,
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

  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tvCellChangeText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 6,
  },
});

export default LoginScreen;
