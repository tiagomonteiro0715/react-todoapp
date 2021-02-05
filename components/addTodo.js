import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

//https://www.youtube.com/watch?v=LH_SoXiu_Hk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=11
export default function AddTodo({submitHandler}) {
const [text, setText] = useState('');

const changeHandler = (val) => {
    setText(val);
}
    return(
    <View>
        <TextInput 
        placeholder='new todo...'
        onChangeText={changeHandler}
        style={styles.input}
        />
        <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
    </View>
    )
}

  
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"

    } 
  });
  