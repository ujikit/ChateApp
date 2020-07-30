import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Gap, InputText, Button} from '../../component';
import {colors, fonts} from '../../utils';
import {IlLogo} from '../../assets';

export default function ForgotPass({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Forgot Password" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.logo}>
          <IlLogo />
          <Gap height={23} />
          <Text style={styles.title}>
            {'Enter your email \nto get the password reset link from us'}
          </Text>
        </View>
        <Gap height={80} />
        <InputText title="Email Address" />
        <Gap height={120} />
        <Button title="Reset Password" />
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
    paddingVertical: 40,
  },
  logo: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
    textAlign: 'center',
  },
});
