import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {IlLogo} from '../../assets';
import {InputText, Link, Button, Gap} from '../../component';
import {fonts, colors} from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <IlLogo />
        <Text
          style={styles.text}>{`Start your day\nby greeting the world`}</Text>
      </View>
      <View>
        <InputText title="Email Address" />
        <Gap height={24} />
        <InputText title="Password" secureTextEntry />
        <Gap height={30} />
        <Link
          title="Forgot Password"
          onPress={() => navigation.navigate('ForgotPass')}
        />
        <Gap height={15} />
        <Button
          title="Sing In"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={15} />
        <Link
          align="center"
          title="Create New Account"
          onPress={() => navigation.navigate('Daftar')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 28,
    color: colors.text.primary,
  },
});
