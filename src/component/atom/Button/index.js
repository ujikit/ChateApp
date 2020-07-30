import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {IcBackDark, IcBackLight} from '../../../assets';

export default function Button({onPress, title, type, Header}) {
  if (Header === 'Header') {
    return (
      <TouchableOpacity onPress={onPress}>
        {type == 'Dark' ? <IcBackLight/> : <IcBackDark/>}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    backgroundColor: colors.button.primary,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
  },
});
