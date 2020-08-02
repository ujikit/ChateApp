import React, {useState, useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ActivityFriend} from '../../component';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

export default function Home() {
  const window = Dimensions.get('window');
  const [content, setContent] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      setUser(res);
    });
    const urlFirebase = `content/`;

    Fire.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataContent = dataSnapshot[key];
            const newData = [];

            Object.keys(dataContent).map((item) => {
              newData.push({
                id: item,
                data: dataContent[item],
              });
            });

            allDataChat.push({
              id: key,
              data: newData,
            });
            setContent(newData);
          });
        }
      });
  }, [user.uid]);

  console.log(content);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {content.map((item) => {
          return (
            <ActivityFriend
              // key={item.id}
              name={item.data.fullName}
              desc={item.data.content}
              imageContent={item.data.photo}
              photo={item.data.avatar.uri}
            />
          );
        })}
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
