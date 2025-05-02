import { ms } from '@utils/design/design';
import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '@assets/images/splash.png';

const Welcome = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/(auth)/signin');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.buttonContainer}>
          <Button title="Sign In" onPress={handleLogin} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: ms(16),
  },
  logo: {
    width: ms(120),
    height: ms(120),
    marginBottom: ms(24),
  },
  title: {
    fontSize: ms(20),
    fontWeight: 'bold',
    marginBottom: ms(24),
  },
  buttonContainer: {
    width: '60%',
  },
});

export default Welcome;
