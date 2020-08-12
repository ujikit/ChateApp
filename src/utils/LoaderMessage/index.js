import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';

import {Dimensions, StyleSheet, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const photo = windowWidth / 3 - 17;

const LoaderMessage = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ContentLoader
          height={1200}
          width={1060}
          speed={2}
          backgroundColor="#2f3134"
          foregroundColor="#1c2022"
          {...props}>
          <Circle cx="25" cy="42" r="25" />
          <Rect x="60" y="28" rx="3" ry="3" width="123" height="7" />
          <Rect x="60" y="50" rx="3" ry="3" width="171" height="6" />
        </ContentLoader>
      </View>
    </View>
  );
};

export default LoaderMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});
