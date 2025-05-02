/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */

import Step1_ForgetPassword from '@src/components/steps/Forget/Step1_ForgetPassword';
import { pageTransitionAnimation } from '@src/constants/Animation';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { View } from 'react-native';

const Forgot = () => {
  const { step } = useMultistepForm([<Step1_ForgetPassword />], {
    newHook: true,
    animatedViewProps: {
      ...pageTransitionAnimation,
    },
  });
  return <View style={{ flex: 1 }}>{step}</View>;
};

export default Forgot;
