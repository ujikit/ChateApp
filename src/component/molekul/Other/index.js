import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Other({text, date}) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.contant}>
          <Text style={styles.text}>Selamat Siang Juga</Text>
        </View>
        <Text style={styles.date}>4.31 PM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    marginBottom: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  contant: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.chat.other,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: '80%',
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
