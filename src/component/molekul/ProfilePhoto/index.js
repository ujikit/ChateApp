import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ProfilePhoto({name, email}) {
  const [photo, setPhoto] = useState(NullPhoto);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.border} onPress={() => alert('Ok')}>
        <Image source={photo} style={styles.img} />
      </TouchableOpacity>

      {name ? <Text style={styles.name}>{name}</Text> : null}
      {name ? <Text style={styles.email}>{email}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    height: 130,
    width: 130,
    borderColor: colors.border.primary,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 26,
  },
  email: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
});
