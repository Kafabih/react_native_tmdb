/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './sources/Routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
