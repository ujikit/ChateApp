import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Header, Button, Gap} from '../../component';
import {colors, fonts} from '../../utils';

export default function ShareMoments({navigation}) {
  const [border, setBorder] = useState(colors.border.secondary);
  const onFocusForm = () => {
    setBorder(colors.border.active);
  };
  const onBlurFrom = () => {
    setBorder(colors.border.secondary);
  };
  const url =
    'https://images.unsplash.com/photo-1595920323353-c569b20ca15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80';

  return (
    <View style={styles.container}>
      <Header
        title="Share Your Experience"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: url}} style={styles.image} />
        </View>
        <Gap height={50} />
        <TextInput
          style={styles.input(border)}
          placeholder="Share Your Experience"
          onFocus={onFocusForm}
          onBlur={onBlurFrom}
        />
        <Gap height={150} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
    paddingTop: 35,
  },
  input: (border) => ({
    borderBottomColor: border,
    borderBottomWidth: 1,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  }),
});
