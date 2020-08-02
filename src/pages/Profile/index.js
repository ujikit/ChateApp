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
import {colors, fonts, getData} from '../../utils';

export default function Profile({navigation}) {
  const [profile, setProfile] = useState({
    photo: NullPhoto,
    fullName: '',
    profession: '',
    desc: 'edit your profile to add bio',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : NullPhoto;
      setProfile(res);
    });
  }, []);
  console.log('data', profile);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>
        <UserProfile
          onPress={() => navigation.navigate('SettingProfile', profile)}
          photo={profile.photo}
          name={profile.fullName}
          desc={profile.desc}
        />

        {/* post photo */}

        <TouchableOpacity
          style={styles.postPhoto}
          onPress={() => navigation.navigate('ShareMoments')}>
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
