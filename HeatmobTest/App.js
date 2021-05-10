import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      result: [
        {
          "iata":"",
          "name":""
        }
      ],
    };
  }

  render() {
    fetch(
      `https://airport-autosuggest.flightright.net/v1/airports/COM?name=${this.state.text}`
    )
      .then((response) => response.json())
      .then((data) => {
        if(data){
          this.setState({ result: data });
        }
      });
    return (
      <View style={{ marginTop: 80, padding: 10 }}>
        <TextInput
          style={{ paddingLeft: 10,height: 40, borderWidth: 1 }}
          placeholder="nhập tên thành phố"
          onChangeText={(text) => this.setState({ text })}
          value = {this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42, color: 'red' }}>{this.state.result[0].name}</Text> 
      </View>
    );
  }
}
