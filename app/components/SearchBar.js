import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../misc/colors';

const SearchBar = ({containerStyle}) => {
    return (
        <View style={[styles.container, {...containerStyle}]}>
            <TextInput style={styles.searchBar} placeholder='Search Here...'/>
        </View>
    );
}; 

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height:40,
        borderRadius:40,
        paddingLeft:10,
        fontSize: 18,
        
    },
    container: {},
});

export default SearchBar;
