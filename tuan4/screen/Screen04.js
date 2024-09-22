import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
export default function Screen04() {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (<View style={styles.container0}>
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <Text style={{height:50,width:200,backgroundColor:'#2c0f99',alignSelf:'center',marginBottom:10}}></Text>
      {/* Password Length Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={(text) => setPasswordLength(text)}
        />
      </View>

      {/* Options */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Include lower case letters</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleCheckboxChange}
        />
        
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Include uppercase letters</Text>
        <View >
          <Checkbox 
            status={checked ? 'checked' : 'unchecked'}
            onPress={handleCheckboxChange}
          />
        </View>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Include numbers</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleCheckboxChange}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Include special symbols</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleCheckboxChange}
        />
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View></View>
  );
}

const styles = StyleSheet.create({
  container0:{
    flex:1,
    backgroundColor: '#2c2e80',
  },
  container: {
    borderRadius:20,
    margin:15,
    flex: 1,
    backgroundColor: '#2c1e99',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    width: '30%',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    color: '#fff',
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: '#2c3e60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  generateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
