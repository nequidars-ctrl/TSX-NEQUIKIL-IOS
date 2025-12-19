import React, {useRef} from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const animationRef = useRef<LottieView>(null);

  const handleAnimationFinish = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#200020" />
      
      <LottieView
        ref={animationRef}
        source={require('../assets/animations/splash.json')}
        autoPlay
        loop={false}
        style={styles.animation}
        resizeMode="cover"
        onAnimationFinish={handleAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export default SplashScreen;
