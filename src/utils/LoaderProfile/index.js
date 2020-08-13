import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';

import {Dimensions, StyleSheet, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const photo = windowWidth / 3 - 17;
const width = windowWidth - 32;

const LoaderProfile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ContentLoader
          speed={2}
          width={800}
          height={575}
          viewBox="0 0 800 575"
          backgroundColor="#2f3134"
          foregroundColor="#1c2022"
          {...props}>
          <Rect x="0" y="20" rx="2" ry="2" width={width} height={photo} />
          <Rect x="0" y="140" rx="2" ry="2" width={width} height={photo} />
        </ContentLoader>
      </View>
    </View>
  );
};

export default LoaderProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
