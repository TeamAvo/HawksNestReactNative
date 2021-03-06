import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../../Auth/AuthProvider'

const Settings = () => {
  const nav = useNavigation()
  const { signOut } = React.useContext(AuthContext)
  
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Settings</Text>
        <TouchableHighlight
        underlayColor='rgba(231,76,60,1)'
        onPress={() => nav.navigate('Info')}>
          <Icon name='chevron-down' style={s.buttonIcon}/>
        </TouchableHighlight>
      </View>
      <View style={s.body}>
        <TouchableHighlight style={s.button}
          underlayColor='rgba(231,76,60,1)'
          onPress={signOut}>
          <Text style={s.buttonText}>Sign Out</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    borderBottomColor: 'rgba(231,76,60,1)',
    borderBottomWidth: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: Dimensions.get("window").width * .075,
  },
  headerIcon: {

  },
  body: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  button: {
    margin: 15,
    padding: 15,
    backgroundColor: 'rgba(231,76,60,1)'
  },
  buttonText: {
    fontSize: Dimensions.get("window").width * .065,
    color: 'white'
  },
  buttonIcon: {
    fontSize: Dimensions.get("window").width * .09,
  }
})

export default Settings