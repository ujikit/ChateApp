import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcPost} from '../../assets';
import {PostContent, UserProfile} from '../../component';
import {colors, fonts} from '../../utils';

export default function Profile() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>
        <UserProfile />

        {/* post photo */}

        <TouchableOpacity style={styles.postPhoto}>
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
