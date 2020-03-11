import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';


export default class MyButton extends Component {
  render() {
    return (
      <View>
          <TouchableOpacity style={styles.buton}>
              <Text style={styles.btnyazi}>Giriş Yap</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    buton:{
        marginVertical:5,
        marginHorizontal:5,
        backgroundColor:'#2BAE66FF',
        borderRadius:8
    },
    btnyazi:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        marginVertical:15

    }
});