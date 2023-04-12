import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default function Head() {
  return (
    <View style={styles.head}>
      <Text style={styles.headTitle}>Messages</Text>
      <Image
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564394-edit_81508.png',
        }}
        style={styles.headImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    // borderColor: 'red',
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headTitle: {
    fontSize: 28,
    color: '#000000',
    fontWeight: 'bold',
  },
  headImage: {
    width: 50,
    height: 50,
  },
});
