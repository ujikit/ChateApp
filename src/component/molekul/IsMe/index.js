import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function IsMe({text, date}) {
  return (
    <View style={styles.container}>
      <View style={styles.contant}>
        <Text style={styles.text}>Halo Selamat Siang</Text>
      </View>
      <Text style={styles.date}>4.30 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  contant: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.chat.isMe,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: '70%',
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
