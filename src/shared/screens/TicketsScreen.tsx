import {observer} from 'mobx-react';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import store from '../../app/store/TodoStore';
import Table from '../../features/Table';
import {useFocusEffect} from '@react-navigation/native';
import CurrentError from '../../features/Error';

const TicketsScreen = observer(() => {
  useFocusEffect(
    React.useCallback(() => {
      store.startPolling();
      return () => {
        store.stopPolling();
      };
    }, []),
  );
  return (
    <View>
      {!store.column[0] && <ActivityIndicator size="large" color="#0000ff" />}
      <CurrentError />
      <Table />
    </View>
  );
});

export default TicketsScreen;
