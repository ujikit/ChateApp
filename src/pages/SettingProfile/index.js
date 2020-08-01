import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ListItem, Gap} from '../../component';
import {colors, fonts} from '../../utils';

export default function SettingProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.name}>Hi, Jhon.jhone</Text>
        <Text style={styles.desc}>is there anything we can help you with?</Text>
      </View>
      <Gap height={58} />
      <ListItem
        icon="edit_profile"
        name="Edit Profile"
        desc="Edit Profile As Desired"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ListItem
        icon="edit_pass"
        name="Change Your Password"
        desc="Keep Your Account Safe"
        onPress={() => navigation.navigate('EditPassword')}
      />
      <ListItem
        icon="rate"
        name="Give Us Rate"
        desc="On Google Play Store"
      />
      <ListItem
        icon="singout"
        name="Sing Out"
        desc="Exit The Aplication"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingVertical: 10,
    borderBottomColor: colors.border.secondary,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 22,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    paddingBottom: 5,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
    paddingBottom: 5,
  },
});
