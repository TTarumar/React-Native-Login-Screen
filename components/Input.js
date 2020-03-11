import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';



export default class Input extends Component {
  render() {
    return (
      <View>
          <TextInput
              {...this.props}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({});