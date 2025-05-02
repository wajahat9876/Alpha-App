import { FontAwesome, Ionicons } from '@expo/vector-icons'; // Import icons
import FormikInput from '@src/components/globals/FormikInput';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import { textInputDefaultProps } from '@src/constants/Props';
import { hs, vs } from '@utils/design/design';
import { useRouter } from 'expo-router';
import { useFormik } from 'formik';
import { useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';

const Signin = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          'Password must contain at least one symbol',
        )
        .required('Required'),
    }),
    onSubmit: () => {},
  });
  const passwordRef = useRef() as React.MutableRefObject<TextInput>;

  return (
    <ScreenAuth
      title="Login"
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
        router.replace('/(auth)/welcome');
      }}
    >
      <View style={styles.container}>
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

        <Text style={[styles.label, { marginTop: vs(16) }]}>Password</Text>
        <FormikInput
          formik={formik}
          name="password"
          ref={passwordRef}
          inputProps={{
            ...textInputDefaultProps,
            placeholder: 'Password',
            returnKeyType: 'done',
            password: true,
          }}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => formik.handleSubmit()}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oauthButton}>
          <FontAwesome
            name="google"
            size={20}
            color="#db4437"
            style={styles.oauthIcon}
          />
          <Text style={styles.oauthText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oauthButton}>
          <FontAwesome
            name="facebook"
            size={20}
            color="#3b5998"
            style={styles.oauthIcon}
          />
          <Text style={styles.oauthText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oauthButton}>
          <Ionicons
            name="logo-apple"
            size={20}
            color="#000000"
            style={styles.oauthIcon}
          />
          <Text style={styles.oauthText}>Continue with Apple</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>You don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenAuth>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vs(32),
    paddingHorizontal: hs(20),
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: vs(4),
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
  passwordInput: {
    flex: 1,
    height: '100%',
    color: '#000',
  },
  eyeIcon: {
    fontSize: 18,
    paddingLeft: hs(8),
    color: '#999',
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
  forgotText: {
    textAlign: 'center',
    color: '#333',
    marginTop: vs(12),
    fontSize: 14,
  },
  oauthButton: {
    backgroundColor: '#f5f5f5',
    height: vs(48),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(12),
    flexDirection: 'row',
  },
  oauthIcon: {
    marginRight: hs(8),
  },
  oauthText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vs(24),
  },
  footerText: {
    fontSize: 14,
    color: '#000',
  },
  signupText: {
    fontSize: 14,
    color: '#6C63FF',
    fontWeight: '500',
  },
});
