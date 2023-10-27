import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const App = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [preInput, setPreInput] = useState("");
  const [isPreInput, setIsPreInput] = useState(false);

  const handleButton = (value:string) => {

    if (value == "Ac") {
      setInput("");
      setResult("");
      setPreInput("");
      setIsPreInput(false)
    }
    else if (value == "-x") {
      const remaining = input.slice(0, input.length - 1);
      const remaining2 = preInput.slice(0, preInput.length - 1);
      setInput(remaining);
      setPreInput(remaining2);
      setIsPreInput(false);
    }
    else if (value == "=") {
      try {
        const calculateResult = eval(input);
        // const calculateResult2 = eval(preInput);
        setIsPreInput(true);
        setResult(calculateResult.toString());
        setInput(calculateResult.toString());
        setPreInput(input);
      }
      catch (Error) {
        setResult("Error");
      }
    }
    else {
      setIsPreInput(false);
      setPreInput((prevInput) => prevInput + value);
      setInput((prevInput) => prevInput + value);
    }
  }
  const buttons = ["-x","(", ")", "Ac",
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
              <Text style={styles.header}>Amar  Picchi Calculator </Text>
            </View>
            <View style={styles.outputContainer}>
              <ScrollView>
               {isPreInput? <Text style={styles.Output}>{preInput} </Text>:""}
                <Text style={styles.Output}>{input} </Text>
                {/* <Text style={styles.Output}>{result}</Text> */}
              </ScrollView>
            </View>

            <ScrollView contentContainerStyle={styles.buttonGrid}>
              {
                buttons.map((button, index) => (
                  <TouchableOpacity key={index} onPress={() => handleButton(button)}  >
                    <View style={styles.button}>
                      <Text style={styles.buttonText} >{button}</Text>
                    </View>
                  </TouchableOpacity>
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
    marginTop: 15,
    fontWeight: "bold"
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
    backgroundColor: '#649ded',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 5,
    height: 80,
    width: 80,
    borderRadius: 100,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 100,
  },

  buttonText: {
    fontSize: 40,
    color:"white"
  },
  outputContainer: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    height: 200,
    marginBottom: 40,
    marginHorizontal: 10,
    marginTop: 15
  }
});

export default App;
