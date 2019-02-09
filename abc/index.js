/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import {Provider} from 'react-reudx';
// import store from './src/store/index'
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
