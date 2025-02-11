import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HomeScreenPageProps} from '../../app/navigation/RootStack';
import Button from '../../entities/Button';

const HomeScreen = ({navigation}: HomeScreenPageProps) => {
  const handleNavigate = () => {
    navigation.navigate('TicketsScreen');
  };

  return (
    <View style={styles.container}>
      <Button onPress={handleNavigate} title="Открыть котировки" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
