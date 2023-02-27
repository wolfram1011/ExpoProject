import React from "react";
import {StyleSheet, Text, View, FlatList } from "react-native";
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      poke: [],
      url: 'https://pokeapi.co/api/v2/type/13/'
      // 'https://pokeapi.co/api/v2/type/electric/'
    }
  }
  componentDidMount(){
    this.getPokemon();
  }


// pokeapi code 1
    getPokemon = () => {
     this.setState({loading: true})
    fetch(this.state.url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        poke: res.pokemon,
        //url: res.next,
        loading: false
      })
    });
  };
  render() {

    // pokeapi.code -1
    if (this.state.loading) {
      return (
          <View style={styles.container}>
            <Text>pokemon!</Text>
          </View>
        );

      }

    return (
      <View style={{flex: 1, paddingTop: 50, paddingLeft:5}}>
      <FlatList
        data = {this.state.poke}
        renderItem ={
           ({item}) => <Text> {item.pokemon.name} </Text>
      }

      />
        <Text>lista de pokemon! </Text>

      </View>

    );

    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });




// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//
//       <Text>Hello World! yeah man</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
