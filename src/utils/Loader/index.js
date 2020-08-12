import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const photo = windowWidth / 3 - 17;
const home = windowWidth - 32;

const LoaderHome = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ContentLoader
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#2f3134"
          foregroundColor="#1c2022"
          {...props}>
          <Circle cx="20" cy="30" r="20" />
          <Rect x="45" y="25" rx="2" ry="2" width="140" height="10" />
          <Rect x="0" y="60" rx="10" ry="10" width={home} height="300" />
        </ContentLoader>
      </View>
    </View>
  );
};

export default LoaderHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});
