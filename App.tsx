import React, { useState } from "react";

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView
} from "react-native";
type GreetingProps = {
  name: string;
  input:string;
  // count: number;
};

const styles = StyleSheet.create({
  screenSize: {
    overflow: "scroll",
  },
  inputArea: {
    marginLeft: 10,
  },
  titles: {
    backgroundColor: "green",
    color: "white"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    fontSize: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: 75,
    height: 75,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    margin: 5,
  },

})


const Person = (props: GreetingProps) => {

  return (
    <Text>{props.name}</Text>
  )
}

const App = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+',
  ];

  const handlePress = () => {
    setCount(count + 1);
    Alert.alert(`you Click ${count + 1} Time`);
  }

  return (
    <SafeAreaView>
      <View style={styles.screenSize}>
        <ScrollView>
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
              {/* <Text onPress={() => handlePress()} style={styles.button} >Click Me</Text> */}
            </View>
          </TouchableOpacity>
          {/* Try to creat Native Calculator  */}

          <View style={styles.container}>
            <Text style={styles.display}>{input}</Text>
            <Text style={styles.display}>{result}</Text>
            <View style={styles.grid}>
              {buttons.map((button) => (
                <Text
                  key={button}
                  onPress={() => handleInput(button)}
                  style={styles.button}
                >
                  {button}
                </Text>
              ))}
            </View>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
export default App;