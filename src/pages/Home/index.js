import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityFriend } from '../../component';
import { colors, fonts } from '../../utils';

export default function Home() {
  const window = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActivityFriend />
        <ActivityFriend />
        <ActivityFriend />
        <ActivityFriend />
        <ActivityFriend />
        <ActivityFriend />
        <ActivityFriend />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
    paddingVertical: 20,
  },
});
