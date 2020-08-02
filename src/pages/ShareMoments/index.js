import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Button, Gap, Header} from '../../component';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

export default function ShareMoments({navigation, route}) {
  const {photo, uid, fullName, avatar} = route.params;
  const [moments, setMoments] = useState('');
  const [border, setBorder] = useState(colors.border.secondary);
  const onFocusForm = () => {
    setBorder(colors.border.active);
  };
  const onBlurFrom = () => {
    setBorder(colors.border.secondary);
  };

  const today = new Date();

  useEffect(() => {});

  const UploadData = () => {
    const data = {
      photo: photo,
      uid: uid,
      fullName: fullName,
      content: moments,
      avatar: avatar,
    };

    console.log(data);

    const url = `content/${uid}/${today}/`;

    console.log(data);
    Fire.database()
      .ref(url)
      .set(data)
      .then((res) => {
        navigation.navigate('Profile');
      });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Share Your Experience"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: photo}} style={styles.image} />
        </View>
        <Gap height={50} />
        <TextInput
          style={styles.input(border)}
          placeholder="Share Your Experience"
          onFocus={onFocusForm}
          onBlur={onBlurFrom}
          value={moments}
          onChangeText={(value) => setMoments(value)}
        />
        <Gap height={150} />
        <Button title="Continue" onPress={UploadData} />
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
