import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, InputText, Header} from '../../component';
import {colors} from '../../utils';

export default function Daftar({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <InputText title="Full Name" />
            <Gap height={24} />
            <InputText title="Email Address" />
            <Gap height={24} />
            <InputText title="No Phone" />
            <Gap height={24} />
            <InputText title="Password" secureTextEntry />
          </ScrollView>
        </View>
        <Gap height={30} />
        <Button
          title="Sing Up"
          onPress={() => navigation.replace('UploadPhoto')}
        />
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
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});
