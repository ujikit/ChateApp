import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListItem, SearchBar} from '../../component';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

export default function Message({navigation}) {
  const [content, setContent] = useState([]);
  const [profile, setProfile] = useState({
    uid: '',
  });

  useEffect(() => {
    getDataUser();
    GetDataFire();
  }, [profile.uid]);

  const getDataUser = () => {
    getData('user').then((res) => {
      setProfile(res);
      console.log(res);
    });
  };

  const GetDataFire = () => {
    const url = `users/`;
    Fire.database()
      .ref(url)
      .on('value', (content) => {
        if (content.val()) {
          const dataContent = content.val();
          const allDataContent = [];
          const newData = [];

          Object.keys(dataContent).map((itemContent) => {
            newData.push({
              id: itemContent,
              data: dataContent[itemContent],
            });
          });

          Object.keys(newData).map((item) => {
            allDataContent.push({
              id: item,
              data: newData[item],
            });
          });

          setContent(newData);
        }
      });
  };

  // const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <SearchBar /> */}
        <Text style={styles.title}>Message</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {content.map((item) => {
          const data = item.data;
          const isMe = item.data.uid === profile.uid;

          return (
            <ListItem
              keys={item.uid}
              onPress={() => navigation.navigate('Chatting', data)}
              photo={{uri: item.data.photo}}
              name={item.data.fullName}
              desc={item.data.bio}
              isMe={isMe}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.dark,
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
