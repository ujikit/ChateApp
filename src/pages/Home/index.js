import React, {useState, useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ActivityFriend} from '../../component';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

export default function Home() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getDataFire();
  }, [content.uid]);

  const getDataFire = () => {
    const url = `contentUser/`;
    Fire.database()
      .ref(url)
      .orderByChild('date')
      .limitToLast(50)
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
          // console.log(newData);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {content.map((item) => {
          return (
            <ActivityFriend
              key={item.id}
              name={item.data.fullName}
              desc={item.data.content}
              imageContent={{uri: item.data.imageContent}}
              photo={{uri: item.data.photo}}
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
    backgroundColor: colors.dark,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
    paddingVertical: 20,
  },
});
