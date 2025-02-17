import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from "./components/header--app";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffe', key:'1'},
    {text: 'create an app', key:'2'},
    {text: 'play on the switch', key:'3'}
  ]);


    //entender melhor esta função https://www.youtube.com/watch?v=SGEitne8N-Q&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=10

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
  })
  }
  
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }
  return (
    <View style={styles.container}>{/*header*/}
            <Header />

      <View style={styles.content}>{/*to form*/}
      <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>

          <FlatList
          data={todos}
          renderItem={({ item }) =>(
            <TodoItem item = {item} pressHandler = {pressHandler}/>
          )}

          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    padding: 40,
  },


  list: {
    marginTop: 20,
  }

});