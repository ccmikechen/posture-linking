import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import TestButton from '../../components/TestButton';
import styles from './styles';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);

    console.log('hello: ', R.strings.HELLO);
  }

  handleButtonPress(type) {
    return () => {
      switch (type) {
        case 'scan':
          this.props.navigator.push({
            screen: 'ScanBleScreen',
            title: R.strings.SCAN_TITLE
          });
          break;
        case 'posture':
          this.props.navigator.push({
            screen: 'PostureScreen',
            title: R.strings.POSTURE_TITLE
          });
          break;
        case 'combination':
          this.props.navigator.push({
            screen: 'CombinationScreen',
            title: R.strings.COMBINATION_TITLE,
            passProps: {},
            animated: true
          });
          break;
        case 'buttonList':
        this.props.navigator.push({
          screen: 'ButtonListScreen',
          title: R.strings.BUTTON_LIST_TITLE,
          passProps: {},
          animated: true
        });
          break;
        case 'serviceList':
        this.props.navigator.push({
          screen: 'ServiceListScreen',
          title: R.strings.SERVICE_LIST_TITLE,
          passProps: {},
          animated: true
        });
          break;
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleButtonPress('scan')}>
          <View style={styles.finishStyle}>
            <Text style={styles.finishFontStyle}>{R.strings.SCAN_TITLE}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleButtonPress('posture')}>
          <View style={styles.finishStyle}>
            <Text style={styles.finishFontStyle}>{R.strings.POSTURE_TITLE}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleButtonPress('combination')}>
          <View style={styles.finishStyle}>
            <Text style={styles.finishFontStyle}>{R.strings.COMBINATION_TITLE}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleButtonPress('buttonList')}>
          <View style={styles.finishStyle}>
            <Text style={styles.finishFontStyle}>{R.strings.BUTTON_LIST_TITLE}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleButtonPress('serviceList')}>
          <View style={styles.finishStyle}>
            <Text style={styles.finishFontStyle}>{R.strings.SERVICE_LIST_TITLE}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
