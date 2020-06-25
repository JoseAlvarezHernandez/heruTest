import 'react-native-gesture-handler'

import React from 'react'
import {AppRegistry} from 'react-native';
import {Provider}  from 'react-redux'

import StackNav from './components/StackNav'
import {name as appName} from './app.json';
import store from './configureStore'

const RNRedux = () => (
    <Provider store={ store }>
        <StackNav />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);