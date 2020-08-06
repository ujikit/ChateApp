import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Button, Gap, Header} from '../../component';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

export default function ShareMoments({navigation, route}) {
  const {imageContent, profile} = route.params;
  const [moments, setMoments] = useState('');
  const [border, setBorder] = useState(colors.border.secondary);
  const onFocusForm = () => {
    setBorder(colors.border.active);
  };
  const onBlurFrom = () => {
    setBorder(colors.border.secondary);
  };

  // date

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 2;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const thisDate = `${year}-${month}-${date}`;

  // useEffect(() => {});

  const UploadData = () => {
    const data = {
      photo: profile.photo.uri,
      uid: profile.uid,
      fullName: profile.fullName,
      content: moments,
      imageContent: imageContent,
    };

    const url = `content/${profile.uid}`;
    const urlUser = `contentUser`;

    Fire.database()
      .ref(url)
      .push(data)
      .then((res) => {
        Fire.database().ref(urlUser).push(data);
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
          <Image source={{uri: imageContent}} style={styles.image} />
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
    backgroundColor: colors.dark,
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
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    // backgroundColor: colors.dark2,
  }),
});
