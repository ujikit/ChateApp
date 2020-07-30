import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap} from '../../atom';
import {colors, fonts} from '../../../utils';

export default function Header({onPress, title, type}) {
  const url =
    'https://images.unsplash.com/photo-1595920323353-c569b20ca15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80';
  return (
    <View style={styles.container(type)}>
      <Button type={type} onPress={onPress} Header="Header" />
      <View style={styles.content}>
        <Text style={styles.title(type)}>{title}</Text>
      </View>
      {type === 'Dark' ? (
        <Image source={{uri: url}} style={styles.avatar} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    flexDirection: 'row',
    paddingVertical: 30,
    backgroundColor:
      type === 'Dark' ? colors.background.secondary : colors.white,
    paddingHorizontal: 16,
    alignItems: 'center',
  }),
  content: {
    flex: 1,
  },
  title: (type) => ({
    fontFamily: fonts.primary[600],
    color: type === 'Dark' ? colors.white : colors.text.primary,
    fontSize: 20,
    textAlign: 'center',
  }),
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
});
