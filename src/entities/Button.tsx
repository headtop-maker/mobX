import React, {FC} from 'react';
import {Text, Pressable, StyleSheet, View} from 'react-native';

type TButton = {
  title: string;
  onPress: () => void;
};

const Button: FC<TButton> = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonPressed: {
    backgroundColor: '#3700b3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
