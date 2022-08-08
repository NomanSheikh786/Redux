import { View, Text ,TextInput,Button,TouchableOpacity} from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/Store'
import Todo from './Todo'
export default function App() {
  return (
  <Provider   store={store}>
  <Todo  />
  </Provider>
   
  )
}