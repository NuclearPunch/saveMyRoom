/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry,NativeModules} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import SplashScreen from 'react-native-splash-screen'

// if (__DEV__) {
//     NativeModules.DevSettings.setIsDebuggingRemotely(true)
// }

AppRegistry.registerComponent(appName, () => {

//    SplashScreen.hide();

   return App
});
