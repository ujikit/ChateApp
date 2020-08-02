import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcPost, NullPhoto} from '../../assets';
import {PostContent, UserProfile} from '../../component';
import {colors, fonts, getData, showError} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {Fire} from '../../config';

export default function Profile({navigation}) {
  const [profile, setProfile] = useState({
    photo: NullPhoto,
    fullName: '',
    profession: '',
    desc: 'edit your profile to add bio',
    uid: '',
  });
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : NullPhoto;
      setProfile(res);
    });
  }, []);

  // upload PhotoData

  const data = {
    photo: photoForDB,
    uid: profile.uid,
    fullName: profile.fullName,
    avatar: profile.photo,
  };

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

  const UploadMoments = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        showError(`You don't take pictures`);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const photoData = response.uri;
        setPhotoForDB(photoData);
        navigation.navigate('ShareMoments', data);
      }
    });
  };

  // data content

  // const url = `content/${profile.uid}/`;
  // Fire.database()
  //   .ref(url)
  //   .on('value')
  //   .then((resDB) => {
  //     if (resDB.val()) {
  //       console.log(resDB.val());
  //     }
  //   });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>
        <UserProfile
          onPress={() => navigation.navigate('SettingProfile', profile)}
          photo={profile.photo}
          name={profile.fullName}
          desc={profile.desc}
        />

        {/* post photo */}

        <TouchableOpacity style={styles.postPhoto} onPress={UploadMoments}>
          <IcPost />
          <Text style={styles.post}>post your moments</Text>
        </TouchableOpacity>

        {/* ====== */}

        <PostContent />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
    paddingBottom: 15,
  },
  postPhoto: {
    width: 125,
    height: 55,
    backgroundColor: colors.background.primary,
    opacity: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  post: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
});
