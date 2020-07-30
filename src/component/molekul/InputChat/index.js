import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {IcEmot, IcSendActive} from '../../../assets';
import {colors} from '../../../utils';

export default function InputChat() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.emot}>
          <IcEmot />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Jhon.jhone"
      />
      <TouchableOpacity style={styles.send}>
        <IcSendActive />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  input: {
    backgroundColor: colors.inputchat.primary,
    borderRadius: 10,
    padding: 14,
    height: 45,
    flex: 1,
  },
  send: {
    width: 45,
    height: 45,
    backgroundColor: colors.inputchat.btn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 7,
  },
  emot: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
});
