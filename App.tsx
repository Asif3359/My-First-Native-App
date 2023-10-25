import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

const App = () => {

    const [input , setInput]=useState("");
    const [result , setResult]=useState("");

  const handleButton =(value)=>{

    if(value=="ac")
    {
      setInput("");
      setResult("");
    }
    else if(value=="=")
    {
      try{
        const calculateResult = eval(input);
        setResult(calculateResult.toString());
      }
      catch(Error){
        setResult("Error");
      }
    }
    else{
      setInput((prevInput) => prevInput + value);
    }
  }
  const buttons = [
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
              <Text style={styles.header}>My Simple Calculator </Text>
            </View>
            <View style={styles.outputContainer}>
              <Text style={styles.Output}>{input}</Text>
              <Text style={styles.Output}>{result}</Text>
            </View>
            <View style={styles.AcButton}>
              <View style={[styles.button]}>
                <Text  onPress={()=>handleButton("ac")} style={styles.buttonText}>Ac</Text>
              </View>
            </View>
            <ScrollView contentContainerStyle={styles.buttonGrid}>
              {
                buttons.map((button, index) => (
                  <View key={index} style={styles.button}>
                    <Text onPress={()=>handleButton(button)} style={styles.buttonText}>{button}</Text>
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
    marginTop: 50
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    marginHorizontal:10
  },
  Output: {
    fontSize: 40,
    marginBottom: 10,
    marginHorizontal:10
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
    borderColor: 'green',
    margin: 5,
    borderRadius: 100,
    shadowColor: "gray",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 100,
  },
  buttonText: {
    fontSize: 20,
    padding:30,
  },
  AcButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 25
  },
  outputContainer: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    height: 200,
    marginBottom: 50
  }
});

export default App;
