import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {fonts, colors} from '../../../utils';

const windowWidth = Dimensions.get('window').width;
const photo = windowWidth / 3 - 6 - 10;

export default function PostContent() {
  const url =
    'https://images.unsplash.com/photo-1595946451139-ea402026bac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post</Text>
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
      </View>
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
      </View>
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
      </View>
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
        <Image source={{uri: url}} style={styles.photo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    paddingTop: 10,

    paddingHorizontal: 16,
  },
  photo: {
    height: photo,
    width: photo,
    marginHorizontal: 3,
  },
});
