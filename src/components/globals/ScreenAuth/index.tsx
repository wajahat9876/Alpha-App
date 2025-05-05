/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  View as ViewDef,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import AppBar from '../AppBar';
import { IScreenAuthProps } from './types';

const ScreenAuth = (props: IScreenAuthProps) => {
  const {
    scroll,
    title,
    children,
    topColor,
    bottomColor,
    style,
    appBarProps,
    disableBottomSafeArea,
    disableTopSafeArea,
    disableAppBar,
    darkStatus,
    back,
    onPress,
    label,
    ...rest
  } = props;

  const { top, bottom } = useSafeAreaInsets();

  const paddingTop = useMemo(
    () => (Platform.OS === 'android' ? top * 0.9 : top),
    // eslint-disable-next-line prettier/prettier
    [top]
  );

  if (scroll)
    return (
      <SafeAreaView edges={['top', 'bottom']} style={styles.flexOne}>
        <ScrollView>
          <ViewDef {...rest}>{children}</ViewDef>
        </ScrollView>
      </SafeAreaView>
    );

  return (
    <>
      <StatusBar barStyle={darkStatus ? 'dark-content' : 'light-content'} />
      <ViewDef
        {...rest}
        style={[styles.flexOne, { backgroundColor: 'transparent' }, style]}
      >
        {!disableTopSafeArea && (
          <View style={{ height: paddingTop, backgroundColor: topColor }} />
        )}
        {!disableAppBar && (
          <AppBar
            {...appBarProps}
            title={title}
            back={back}
            label={label}
            onPress={onPress}
          />
        )}
        {children}
        {!disableBottomSafeArea && (
          <View style={{ height: bottom, backgroundColor: bottomColor }} />
        )}
      </ViewDef>
    </>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default ScreenAuth;
