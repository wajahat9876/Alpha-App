/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/order */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowBackDark from '@assets/icons/commons/icon-arrow-back-dark.svg';
import ArrowBackLight from '@assets/icons/commons/icon-arrow-back.svg';
import { Text } from '@src/components/libraries';
import Colors from '@src/constants/Colors';
import { hs, ms, vs } from '@utils/design/design';
import { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppBarProps } from './types';

const AppBar = (props: AppBarProps) => {
  const { title, light, rightIcon, back, label, onPress } = props;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.left}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => {
                if (onPress) onPress();
                if (back) back();
              }}
            >
              {light ? <ArrowBackDark /> : <ArrowBackLight />}
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <Text
              style={[
                styles.title,
                {
                  color: light
                    ? Colors.light.theme.black
                    : Colors.light.theme.white,
                },
              ]}
            >
              {title}
            </Text>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={rightIcon ? styles.right : styles.rightEmpty}>
            {/* Add right-side icons here if needed */}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: hs(20),
    paddingTop: vs(35),
    borderBottomLeftRadius: ms(18),
    borderBottomRightRadius: ms(18),
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    width: '20%',
  },
  touchable: {
    width: 50,
  },
  center: {
    width: '60%',
    alignItems: 'center',
  },
  right: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: ms(10),
    marginLeft: 10,
  },
  rightEmpty: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: ms(10),
  },
  title: {
    fontSize: 16,
    paddingBottom: vs(20),
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    color: Colors.light.theme.white,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default memo(AppBar);
