import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {color} from 'react-native-reanimated';
import {Fire} from '../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <IlLogo width={100} height={100} />
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
