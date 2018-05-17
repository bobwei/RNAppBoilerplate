import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('App', () => App);

const { YellowBox } = require('react-native');

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader requires',
  'Class RCTxxModule was not exported',
]);
