import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, InputText, ProfilePhoto } from '../../component';
import { colors } from '../../utils';

export default function EditProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ProfilePhoto />
          <Gap height={26} />
          <View>
            <InputText title="Full Name" />
            <Gap height={24} />
            <InputText title="No Phone" />
            <Gap height={24} />
            <InputText title="Email Address" disable />
            <Gap height={24} />
            <InputText title="Your Biodata" />
          </View>
          <View>
            <Gap height={60} />
            <Button
              title="Save Profile"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
});
