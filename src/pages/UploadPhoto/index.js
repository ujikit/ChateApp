import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePhoto from '../../component/molekul/ProfilePhoto';
import {colors, fonts, showError, storeData} from '../../utils';
import {Button, Link, Gap} from '../../component';
import ImagePicker from 'react-native-image-picker';
import {NullPhoto} from '../../assets';
import {Fire} from '../../config';

export default function UploadPhoto({navigation, route}) {
  const {fullName, email, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(NullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  const options = {
    title: 'Select Your Photo',

    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    quality: 0.8,
    maxWidth: 200,
    maxHeight: 200,
  };

  const UploadPhoto = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        showError('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        const photoData = response.uri;

        setPhoto(source);
        setPhotoForDB(photoData);
        setHasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    Fire.database().ref(`users/${uid}/`).update({photo: photoForDB});
    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Photo</Text>
      <View style={styles.content}>
        <ProfilePhoto
          name={fullName}
          email={email}
          onPress={UploadPhoto}
          photo={photo}
        />
      </View>
      <Gap height={30} />
      <Button
        title="Upload And Continue"
        disable={!hasPhoto}
        onPress={uploadAndContinue}
      />
      <Link
        title="Skip for This"
        align="center"
        onPress={() => navigation.replace('MainApp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
    textAlign: 'center',
  },
});
