import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {IcPost, NullPhoto} from '../../assets';
import {UserProfile} from '../../component';
import {Fire} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

const windowWidth = Dimensions.get('window').width;
const photo = windowWidth / 3 - 17;

export default function Profile({navigation}) {
  const [profile, setProfile] = useState({
    photo: NullPhoto,
    fullName: '',
    profession: '',
    uid: '',
    bio: '',
  });
  const [photoContent, setPhotoContent] = useState('');
  const [content, setContent] = useState([]);

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : NullPhoto;
      setProfile(res);
    });
  }, []);

  // upload PhotoData

  const data = {
    imageContent: photoContent,
    profile: profile,
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
      if (response.didCancel) {
        showError(`You don't take pictures`);
      } else if (response.error) {
        showError('ImagePicker Error: ', response.error);
      } else {
        const photoData = response.uri;
        setPhotoContent(photoData);
        navigation.navigate('ShareMoments', data);
      }
    });
  };

  useEffect(() => {
    // data content

    const url = `content/${profile.uid}/`;
    Fire.database()
      .ref(url)
      .on('value', (content) => {
        if (content.val()) {
          const dataContent = content.val();
          const allDataContent = [];
          const newData = [];

          Object.keys(dataContent).map((itemContent) => {
            newData.push({
              id: itemContent,
              data: dataContent[itemContent],
            });
          });

          Object.keys(newData).map((item) => {
            allDataContent.push({
              id: item,
              data: newData[item],
            });
          });

          setContent(newData);
        }
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Your Profile</Text>
          <UserProfile
            onPress={() => navigation.navigate('SettingProfile', profile)}
            photo={profile.photo}
            name={profile.fullName}
            desc={profile.bio}
          />

          {/* post photo */}

          <TouchableOpacity style={styles.postPhoto} onPress={UploadMoments}>
            <IcPost />
            <Text style={styles.post}>post your moments</Text>
          </TouchableOpacity>
        </View>

        {/* data Content */}
        <>
          <View style={styles.containerContent}>
            <Text style={styles.titleContent}>Post</Text>
            <View style={styles.contentContent}>
              {content.map((item) => {
                return (
                  <Image
                    key={item.id}
                    source={{uri: item.data.imageContent}}
                    style={styles.photoContent}
                  />
                );
              })}
            </View>
          </View>
        </>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  content: {alignItems: 'center', flex: 1},
  page: {
    flex: 1,
    backgroundColor: colors.dark,
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
  containerContent: {
    flex: 1,
    maxWidth: windowWidth,
  },
  titleContent: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    paddingTop: 20,
  },
  contentContent: {
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap',
  },
  photoContent: {
    height: photo,
    width: photo,
    margin: 3,
  },
});
