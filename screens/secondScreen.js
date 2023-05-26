import React from 'react';
import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SecondScreen() {

     // async storage
     const storeData = async () => {
        try {
          const value = JSON.stringify(true)
          await AsyncStorage.setItem('introShow', value)
          console.log("storage set")
        } catch (e) {
            console.log('erro while set the async storage >>',e)
        }
      }
  
    return (
        <View style={styles.container}>
          <Text>Second screens</Text>
          <TouchableOpacity style={styles.button} onPress={storeData}>
            <Text> Entro start </Text>
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