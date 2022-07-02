/**
 * @format
 */

import {AppRegistry} from 'react-native'
// import App from './App'
import Home from './src/screens/Home/Home'
import AddInstallment from './src/screens/AddInstallment/AddInstallment'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => Home)
