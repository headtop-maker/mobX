import React, {FC, memo, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

type TAnimateText = {
  text: string;
  currentIndex: number;
};

const AnimateText: FC<TAnimateText> = ({text, currentIndex}) => {
  const colorValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(colorValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => colorValue.setValue(0));
  }, [colorValue, text]);

  const animateColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#333', '#ff4081'],
  });

  return (
    <Animated.Text
      style={[
        {
          color: animateColor,
          backgroundColor: currentIndex === 0 ? '#d3d3d3' : '#FFFFFF',
          fontSize: currentIndex === 0 ? 14 : 10,
        },
      ]}>
      {text}
    </Animated.Text>
  );
};

export default memo(AnimateText);
