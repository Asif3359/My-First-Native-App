import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const App = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButton = (value) => {

    if (value == "Ac") {
      setInput("");
      setResult("");
    }
    else if (value == "x") {
      const remaining = input.slice(0, input.length - 1);
      setInput(remaining);
    }
    else if (value == "=") {
      try {
        const calculateResult = eval(input);
        setResult(calculateResult.toString());
        setInput(calculateResult.toString());
      }
      catch (Error) {
        setResult("Error");
      }
    }
    else {
      setInput((prevInput) => prevInput + value);
    }
  }
  const buttons = ["Ac", "(", ")", "x",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.header}>Amar Picchi Calculator </Text>
            </View>
            <View style={styles.outputContainer}>
              <Text style={styles.Output}>{input}</Text>
              <Text style={styles.Output}>{result}</Text>
            </View>

            <ScrollView contentContainerStyle={styles.buttonGrid}>
              {
                buttons.map((button, index) => (
                  <View key={index} style={styles.button}>
                    <TouchableOpacity>
                      <Text onPress={() => handleButton(button)} style={styles.buttonText}>{button}</Text>
                    </TouchableOpacity>
                  </View>
                ))
              }
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop:15,
    fontWeight:"bold"
  },
  Output: {
    fontSize: 40,
    marginBottom: 10,
    marginHorizontal: 10
  },
  buttonGrid: {
    flexDirection: 'row', // Horizontal layout
    flexWrap: 'wrap', // Allow items to wrap to the next row
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    height:80,
    width:80,
    borderRadius: 100,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 100,
  },

  buttonText: {
    fontSize: 20,
    padding: 30,
  },
  outputContainer: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    height: 200,
    marginBottom: 40,
    marginHorizontal:10,
    marginTop:15
  }
});

export default App;
