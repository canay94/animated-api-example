import React, { Component } from 'react'
import { View, Animated, Button, Easing } from 'react-native'

export default class ParallelAndSequence extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(1)
    this.opacityValue = new Animated.Value(1)
  }

  //sequence animation handler

  handleSequenceAnimation = () => {
    this.animatedValue.setValue(0)

    Animated.sequence([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        useNativeDriver: true,
        easing: Easing.linear,
        duration: 400
      }),
      Animated.spring(this.animatedValue, {
        toValue: 2,
        delay: 1000,
        friction: 1,
        useNativeDriver: true
      })
    ]).start()
  }

  //parallel animation handler

  handleParallelAnimation = () => {
    this.animatedValue.setValue(0)
    this.opacityValue.setValue(0)

    Animated.parallel([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        useNativeDriver: true,
        easing: Easing.linear,
        duration: 400
      }),
      Animated.timing(this.opacityValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.linear
      })
    ]).start()
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', justifyContent: "center", alignItems: "center" }}>
        <Animated.View opacity={this.opacityValue} style={{ height: 150, width: 150, backgroundColor: 'red', transform: [{ scale: this.animatedValue }] }} />
        <View style={{ width: 100, marginTop: 20 }}>
          <Button onPress={this.handleParallelAnimation} title='Press Me' />
        </View>
      </View>
    )
  }
}
