import { Text } from '@src/components/libraries';
import Colors from '@src/constants/Colors';
import { hs, ms, vs } from '@utils/design/design';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import { TextInput as TextInputNative } from 'react-native';
import { TextInput as TextInputPaper } from 'react-native-paper';
import { DefaultTextInputProps } from '../types';

const DefaultInput = React.forwardRef<TextInputNative, DefaultTextInputProps>(
  (props, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const {
      style,
      contentStyle,
      value,
      password,
      errorText,
      last,
      backgroundColor,
      lineHeight,
      roundedRadius,
      ...others
    } = props;

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <>
        <TextInputPaper
          {...others}
          ref={ref}
          autoCorrect={false}
          value={value}
          selectionColor="black"
          underlineStyle={{
            backgroundColor: 'transparent',
          }}
          contentStyle={[
            {
              paddingLeft: hs(16),
              fontFamily: 'poppins',
              fontSize: ms(14),
            },
            contentStyle, // Merge with custom contentStyle
          ]}
          style={[
            {
              borderWidth: 1,
              backgroundColor: errorText
                ? backgroundColor
                : backgroundColor || 'white',
              borderColor: '#D3D3D3',
              height: vs(60),
              lineHeight,
              borderRadius: roundedRadius ? hs(7) : hs(7), // Example for roundedRadius
            },
            style, // Merge with custom style
            last ? { borderBottomWidth: 2 } : {}, // Apply border if it's the last input
          ]}
          secureTextEntry={password ? !isPasswordVisible : false}
          right={
            password && (
              <TextInputPaper.Icon
                icon={!isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                forceTextInputFocus={false}
                onPress={() => {
                  togglePasswordVisibility();
                }}
              />
            )
          }
        />
        <AnimatePresence>
          {errorText && (
            <MotiView
              key={errorText}
              from={{
                height: 0,
                marginTop: 0,
              }}
              animate={{
                height: 20,
                marginTop: vs(8),
              }}
              exit={{
                height: 0,
                marginTop: 0,
              }}
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: hs(8),
                paddingRight: hs(8),
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'poppins',
                  color: Colors.light.theme.errorColor,
                }}
              >
                {errorText}
              </Text>
            </MotiView>
          )}
        </AnimatePresence>
      </>
    );
    // eslint-disable-next-line prettier/prettier
  }
);

export default DefaultInput;
