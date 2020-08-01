import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../../utils';

export default function UserProfile({onPress}) {
  const url =
    'https://images.unsplash.com/photo-1595920323353-c569b20ca15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80';

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
          <Image source={{uri: url}} style={styles.photo} />
        </View>
      </LinearGradient>
      <Text style={styles.name}>Jhon.jhone</Text>
      <Text
        style={
          styles.desc
        }>{`Indonesia - East Java - Tulungagung \nDeveloper App`}</Text>
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
