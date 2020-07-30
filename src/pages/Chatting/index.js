import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatContent, Gap, InputChat} from '../../component';
import {fonts, colors} from '../../utils';

export default function Chatting({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        title="Alexander"
        type="Dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.date}>Senin, 21 Maret 2020</Text>
          <Gap height={23} />
          <ChatContent isMe />
          <ChatContent />
        </ScrollView>
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
