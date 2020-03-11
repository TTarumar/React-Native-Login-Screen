import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from "./Input";
import MyButton from "./MyButton";

export default class Logincomp extends Component {
  render() {
    return (
      <View>
          <Text style={styles.giris}>Giriş Yap</Text>
        <Input style={styles.kadi}
        placeholder={"Kullanıcı Adı"}
        />
        <Input style={styles.sifre}
                    placeholder={"Şifre"}
                    secureTextEntry={true}
      />
      <MyButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  giris:{
    fontWeight:'bold',
    color:'#808080',
    marginVertical:15
  },
  kadi:{
    marginVertical: 10,
    borderWidth:4,
    borderColor:'#f1f1f1',
    borderRadius:5,
    paddingHorizontal:9
  },
  sifre:{
    marginVertical: 10,
    borderWidth:4,
    borderColor:'#f1f1f1',
    borderRadius:5,
    paddingHorizontal:9
  }

});