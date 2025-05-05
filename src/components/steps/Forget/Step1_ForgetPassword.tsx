/* eslint-disable camelcase */
import Lock from '@assets/icons/LockIcon.png';
import FormikInput from '@src/components/globals/FormikInput';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import { textInputDefaultProps } from '@src/constants/Props';
import { hs, vs } from '@utils/design/design';
import { useRouter } from 'expo-router';
import { useFormik } from 'formik';
import { useRef } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';

const Step1_ForgetPassword = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please provide a valid email address.')
        .required('Required'),
    }),
    onSubmit: () => {},
  });
  const passwordRef = useRef() as React.MutableRefObject<TextInput>;

  return (
    <ScreenAuth
      title="Forget Password"
      topColor="transparent"
      bottomColor="transparent"
      disableTopSafeArea
      disableBottomSafeArea
      darkStatus
      appBarProps={{
        light: true,
        rightIcon: false,
      }}
      back={() => {
        router.replace('/(auth)/signin');
      }}
    >
      <View style={styles.container}>
        <View style={{ alignSelf: 'center' }}>
          <Image source={Lock} />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: vs(20),
            marginTop: vs(24),
            color: '#3F3D56',
          }}
        >
          Forget your password?
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: vs(8),
            marginBottom: vs(24),
            fontSize: vs(14),
          }}
        >
          Enter your registered email below to recieve password reset
          instructions
        </Text>
        <Text style={styles.label}>Email address</Text>

        <FormikInput
          formik={formik}
          name="email"
          inputProps={{
            ...textInputDefaultProps,
            placeholder: 'Email',
            keyboardType: 'email-address',
            returnKeyType: 'next',
            onSubmitEditing: () => {
              if (passwordRef?.current) {
                passwordRef.current.focus();
              }
            },
          }}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => formik.handleSubmit()}
        >
          <Text style={styles.loginButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScreenAuth>
  );
};

export default Step1_ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vs(32),
    paddingHorizontal: hs(20),
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: vs(20),
    color: '#000',
  },
  input: {
    height: vs(48),
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: hs(12),
    backgroundColor: '#f8f8f8',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: vs(48),
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: hs(12),
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
  },

  loginButton: {
    backgroundColor: '#1E1B2E',
    marginTop: vs(24),
    height: vs(48),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
