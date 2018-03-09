import React, { Component } from 'react';
import { Animated, Image } from 'react-native';
const bg = require('../../../assets/images/bg.png');
const logo = require('../../../assets/images/logo.png');

export default class BackgroundImage extends Component {

  state = {
    anim: new Animated.Value(0.5),
    value: 0.5,
    degree: 1
  };

  componentDidMount() {
    this.runAnimation();
  }

  runAnimation = () => {
    let { anim, degree, value } = this.state;
    console.log(anim, degree);
    Animated.timing(
      this.state.anim,
      {
        toValue: value,
        duration: 500,
      },
    ).start(()=>{
      this.setState({
        value: value !== 0.5 ? 0.5 : 1,
        degree: degree === 1 ? -1 : 1
      });

      this.runAnimation();
    });
  };

  render() {
    let { degree, anim } = this.state;

    return [
      <Image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        source={bg}
        key={0}
      />,
      <Animated.View
        style={{
          ...this.props.style,
          opacity: anim,
          transform: [
            { rotate: `${degree}deg`},
            { perspective: 1000 }
          ],
        }}
        key={1}
      >
        <Image
          style={{
            position: 'absolute',
            top: 170,
            left: 40,
            width: 180,
            height: 100,
          }}
          source={logo}
        />
      </Animated.View>
    ];
  }
}
