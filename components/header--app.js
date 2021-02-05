import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(){
    return (
        <View style={styles.headerr}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerr: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});