import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import store from '../app/store/TodoStore';

const CurrentError = observer(() => {
  if (!store.errorMessage) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{store.errorMessage}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEE2E2',
    borderColor: '#F87171',
    borderWidth: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  message: {
    color: '#B91C1C',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginLeft: 8,
  },
});

export default CurrentError;
