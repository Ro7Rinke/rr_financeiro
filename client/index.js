/**
 * @format
 */

import {AppRegistry} from 'react-native'
import Router from './src/components/Router/Router'
import {name as appName} from './app.json'

import { baseURL } from './src/common'

import axios from 'axios'
axios.defaults.baseURL = baseURL

AppRegistry.registerComponent(appName, () => Router)
