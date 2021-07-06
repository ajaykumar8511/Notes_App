import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Note = ({item}) => {
    const {title, desc} = item;

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{desc}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});


export default Note;
