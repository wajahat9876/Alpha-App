/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */

import { pageTransitionAnimation } from '@src/constants/Animation';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { View } from 'react-native';

const Forgot = () => {
  const { step } = useMultistepForm([], {
    newHook: true,
    animatedViewProps: {
      ...pageTransitionAnimation,
    },
  });
  return <View className="flex-1">{step}</View>;
};

export default Forgot;
