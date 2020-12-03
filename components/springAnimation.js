import React, { Component } from 'react'
import { View, Animated, Button, Easing } from 'react-native'

export default class Spring extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(1)
  }

  handleAnimation = () => {
    this.animatedValue.setValue(0)
    Animated.spring(this.animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      friction: 1
    }).start()
  }
  render() {
    return (
      <View style={{ height: '100%', width: '100%', justifyContent: "center", alignItems: "center" }}>
        <Animated.View style={{ height: 150, width: 150, backgroundColor: 'red', transform: [{ scale: this.animatedValue }] }} />
        <View style={{ width: 100, marginTop: 20 }}>
          <Button onPress={this.handleAnimation} title='Press Me' />
        </View>
      </View>
    )
  }
}
