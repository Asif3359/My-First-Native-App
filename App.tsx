import React from "react";

import{
  View,
  SafeAreaView,
  Text,
} from "react-native";

const Person =({name})=>{

  return(
    <Text>{name}</Text>
  )
}

const App =()=>{
  return(
    <SafeAreaView>
      <View>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hell World</Text>
        <Text>Hi My Name Is Asif</Text>
        <Text>Hi My Name Is Asif</Text>
        {/* Use Props Property */}
        <Text>Hell <Person name='Asif'></Person></Text>
        <Text>Hell <Person name='Atik'></Person></Text>
        <Text>Hell <Person name='Alin'></Person></Text>
      </View>
    </SafeAreaView>
  )
}
export default App;