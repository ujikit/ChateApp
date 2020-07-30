import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfilePhoto from '../../component/molekul/ProfilePhoto';
import {colors, fonts} from '../../utils';
import {Button, Link, Gap} from '../../component';

export default function UploadPhoto() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Photo</Text>
      <View style={styles.content}>
        <ProfilePhoto name="Jhon.Jhone" email="jhon@mail.com" />
      </View>
      <Gap height={30} />
      <Button
        title="Upload And Continue"
        onPress={() => navigation.replace('MainApp')}
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
