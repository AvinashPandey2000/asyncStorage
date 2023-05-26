import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FirstScreen() {

    // async storage
    const storeData = async () => {
        try {
          const value = JSON.stringify(false)
          await AsyncStorage.setItem('introShow', value)
          console.log("storage set")
        } catch (e) {
            console.log('erro while set the async storage >>',e)
        }
      }
      

  return (
    <View style={styles.container}>
      <Text>firstScreen</Text>
      <TouchableOpacity style={styles.button} onPress={storeData}>
        <Text> Entro End </Text>
      </TouchableOpacity>
     </View>
  );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    button:{
        borderWidth:1,
        borderRadius:10,
        marginTop:20,
        padding:10
    }
})