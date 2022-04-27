/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {StandardScreen} from '../actToLight/react-native/screens/standard'
import { WrapperScreens } from './react-native/screens/components/wrapperScreens';

const App = () => {
  return (
    <WrapperScreens>
      <StandardScreen/>
    </WrapperScreens>
  )
};


export default App;
