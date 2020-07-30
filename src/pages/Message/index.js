import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SearchBar, ChatItem} from '../../component';
import {colors, fonts} from '../../utils';

export default function Message({navigation}) {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SearchBar />
        <Text style={styles.title}>Message</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatItem onPress={() => navigation.navigate('Chatting')} />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {paddingHorizontal: 16},
  title: {
    paddingTop: 25,
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
  },
});
