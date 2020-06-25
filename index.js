import 'react-native-gesture-handler'

import {AppRegistry} from 'react-native';
import StackNav from './components/StackNav'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StackNav);