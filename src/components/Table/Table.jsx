import React from 'react';
import { TextInput, View, Text, TouchableOpacity  } from 'react-native';
import { useState, useEffect } from 'react'
import { styles } from './styles'

export function Table() {

 const [gasCost, setGasCost] = useState(0);
 const [kmPerLiter, setKmPerLiter] = useState(0);
 const [kmCost, setKmCost] = useState(0);


 function calcKmCost (gasCost, kmPerLiter) {
  const total = gasCost / kmPerLiter;
  return setKmCost(total)
 }

 console.log(gasCost);


  return (
    <View style={styles.container}>
      <View style={styles.petrolValueContainer}>
        <Text style={styles.petrolValueText} >23</Text>
        <TextInput value={gasCost} onChangeText={setGasCost} style={styles.petrolValueInput} />
      </View>
      <View style={styles.petrolValueContainer}>
        <Text style={styles.petrolValueText} >23</Text>
        <TextInput value={kmPerLiter} onChangeText={setKmPerLiter} style={styles.petrolValueInput} />
      </View>
      <View style={styles.petrolValueContainer}>
        <Text style={styles.petrolValueText}>R${kmCost}</Text>
      </View>
      <TouchableOpacity style={styles.calcKmCostButton} onPress={() => calcKmCost(gasCost, kmPerLiter)}/>
    </View>
  );
}