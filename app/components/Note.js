import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../misc/colors';


const Note = ({ item, onPress }) => {
    const { title, desc } = item;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title} numberOfLines={2} >{title}</Text>
            <Text style={styles.desc} numberOfLines={3} >{desc}</Text>
        </TouchableOpacity>
    );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY,
        width: width / 2 - 10,
        padding: 8,
        borderRadius: 10,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        color: colors.LIGHT,
    },
    desc: {},
});


export default Note;
