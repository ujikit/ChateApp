import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../../utils';

export default function UserProfile({onPress, photo, name, desc}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={[
          colors.linier.color3,
          colors.linier.color2,
          colors.linier.color1,
        ]}
        style={styles.border}>
        <View style={styles.border2}>
          <Image source={photo} style={styles.photo} />
        </View>
      </LinearGradient>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  border: {
    width: 120,
    height: 120,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 15,
  },
  border2: {
    width: 115,
    height: 115,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 22,
    fontFamily: fonts.primary[700],
    paddingTop: 10,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    paddingTop: 5,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
