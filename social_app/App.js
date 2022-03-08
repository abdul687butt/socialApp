import React, {useState} from 'react'
import { LogBox, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from './src/store';

import Route from './src/route'

const App = () => {
  LogBox.ignoreLogs['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead']
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Route/>    
      </PersistGate>
    </Provider>
  )
}

export default App