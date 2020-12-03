import React, { Component } from 'react'
import { View, Animated, Button, Easing } from 'react-native'

export default class Interpolation extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(1)
  }

  handleAnimation = () => {
    this.animatedValue.setValue(0)
    Animated.timing(this.animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.linear,
      duration: 600
    }).start()
  }
  render() {
    const interpolatedValue = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '90deg', '0deg']
    })
    return (
      <View style={{ height: '100%', width: '100%', justifyContent: "center", alignItems: "center" }}>
        <Animated.View style={{ height: 150, width: 150, backgroundColor: 'red', transform: [{ rotate: interpolatedValue }] }} />
        <View style={{ width: 100, marginTop: 20 }}>
          <Button onPress={this.handleAnimation} title='Press Me' />
        </View>
      </View>
    )
  }
}
