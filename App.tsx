import React, { useState } from "react";

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";
type GreetingProps = {
  name: string;
  // count: number;
};

const styles =StyleSheet.create({
  screenSize:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    backgroundColor:"gray",
    textAlign:"center",
    marginTop:5,
    padding:3,
    width:150,
  },
  titles:{
    backgroundColor:"green",
    color:"white"
    
  }
})


const Person = (props: GreetingProps) => {

  return (
    <Text>{props.name}</Text>
  )
}

const App = () => {

  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    Alert.alert(`you Click ${count+1} Time`);
  }

  return (
    <SafeAreaView>
      <View style={styles.screenSize}>
        <Text style={styles.titles}>Hell World</Text>
  
        <Text>Hi My Name Is Asif</Text>
        <Text>Hi My Name Is Asif</Text>

        {/* Use Props Property */}
        <Text>Hell <Person name='Asif'></Person></Text>
        <Text>Hell <Person name='Atik'></Person></Text>
        <Text>Hell <Person name='Alin'></Person></Text>

        {/* Using Type script */}
        <Text>Hell <Person name='Asif Ahammed'></Person></Text>
        <Text>Click Time: {count}</Text>
        <TouchableOpacity>
          <View>
            <Text onPress={() => handlePress()} style={styles.button} >Click Me</Text>
          </View>
        </TouchableOpacity>



      </View>
    </SafeAreaView>
  )
}
export default App;