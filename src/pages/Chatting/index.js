import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatContent, Gap, InputChat} from '../../component';
import {fonts, colors, getData, setDateChat, getTimeChat} from '../../utils';
import {Fire} from '../../config';

export default function Chatting({navigation, route}) {
  const {fullName, photo, uid} = route.params;
  const [chatContent, setChatContent] = useState('');
  const [chatData, setChatData] = useState([]);
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    uid: '',
  });

  useEffect(() => {
    getDataLoka();
    getChatData();
  }, [uid, profile.uid]);

  const getDataLoka = () => {
    getData('user').then((res) => {
      setProfile(res);
    });
  };

  const PushChat = () => {
    const today = new Date();
    const chatId = `${profile.uid}_${uid}`;
    const url = `chatting/${chatId}/allChat/${setDateChat(today)}`;
    const dataChat = {
      sendBy: profile.uid,
      chatDate: new Date().getTime(),
      chatTime: getTimeChat(today),
      chatContent: chatContent,
    };

    Fire.database()
      .ref(url)
      .push(dataChat)
      .then((res) => {
        setChatContent('');
      });
  };

  const getChatData = () => {
    const ChatId = `${profile.uid}_${uid}`;
    const url = `chatting/${ChatId}/allChat/`;

    Fire.database()
      .ref(url)
      .endAt(30)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newData = [];

            Object.keys(dataChat).map((itemChat) => {
              newData.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newData,
            });
          });
          setChatData(allDataChat);
        }
      });
  };

  console.log(chatData);

  return (
    <View style={styles.container}>
      <Header
        title={fullName}
        type="Dark"
        onPress={() => navigation.goBack()}
        photo={{uri: photo}}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.date}>Senin, 21 Maret 2020</Text>
          <Gap height={23} />
          <ChatContent isMe />
          <ChatContent />
        </ScrollView>
      </View>
      <InputChat
        name={fullName}
        disable={chatContent <= 0 ? true : false}
        onChangeText={(value) => setChatContent(value)}
        value={chatContent}
        onPress={PushChat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.dark2, flex: 1},
  content: {flex: 1},
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
