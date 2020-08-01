import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListItem, SearchBar} from '../../component';
import {colors, fonts} from '../../utils';

export default function Message({navigation}) {
  const [search, setSearch] = useState('');
  const url =
    'https://images.unsplash.com/photo-1595920323353-c569b20ca15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SearchBar />
        <Text style={styles.title}>Message</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListItem
          onPress={() => navigation.navigate('Chatting')}
          photo={{uri: url}}
          name="Alexander"
          desc="Halo selamat pagi..."
        />
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
