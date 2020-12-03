import React, { Component } from 'react'
import { Text, View, Animated, Button, Easing } from 'react-native'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(-200)
  }

  handleAnimation = () => {
    this.animatedValue.setValue(0)
    Animated.timing(this.animatedValue, {
      toValue: 50,
      useNativeDriver: true,
      duration: 2000,
      velocity: 0.95,
      deceleration: 0.998
    }).start()
  }
  render() {
    return (
      <View style={{ height: '100%', width: '100%', justifyContent: "center", alignItems: "center" }}>
        <Animated.View style={{ height: 150, width: 150, backgroundColor: 'red', transform: [{ translateY: this.animatedValue }] }} />
        <View style={{ width: 100, marginTop: 20 }}>
          <Button onPress={this.handleAnimation} title='Press Me' />
        </View>
      </View>
    )
  }
}
