import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {color} from 'react-native-reanimated';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <IlLogo width={100} height={100}/>
      <Text style={styles.title}>ChateApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
