import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import store from '../app/store/TodoStore';
import {observer} from 'mobx-react';
import AnimateText from '../entities/AnimateText';

const Table = observer(() => {
  return (
    <ScrollView horizontal style={styles.container}>
      {store.column &&
        store.column.map((column, index) => (
          <View key={'column' + index} style={styles.table}>
            {column.map((item, ind) => (
              <AnimateText text={item} key={'key' + ind} currentIndex={ind} />
            ))}
          </View>
        ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {padding: 10},
  table: {flexDirection: 'column', borderWidth: 1},
});

export default Table;
