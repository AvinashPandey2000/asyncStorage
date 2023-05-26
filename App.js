import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('introShow');
    console.log('Retrieved value:', value);
    return value;
  } catch(e) {
    console.log('erro while get Async storage >>',e)
  }
}

export default function App() {
  const [showIntor , setShowIntro]=useState('true')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value= await getData();
        console.log('app value >>',value)
        setShowIntro(value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])
  

  console.log('showIntor second>>',showIntor)
  return (
    <View style={{flex:1}}>

    {showIntor ==='true' ? (<FirstScreen/>):(<SecondScreen/>)}
    {console.log('showIntor>>',showIntor)}

     </View>
  );
}
