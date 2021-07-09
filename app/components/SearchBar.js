import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import colors from '../misc/colors';

const SearchBar = ({containerStyle, value, onChangeText, onClear}) => {
    return (
        <View style={[styles.container, {...containerStyle}]}>
            <TextInput 
                value={value} 
                onChangeText={onChangeText} 
                style={styles.searchBar} 
                placeholder='Search Here...'
            />
            {value ? (<AntDesign 
                name='close' 
                size={20} 
                color={colors.PRIMARY} 
                onPress={onClear}
                style={styles.clearIcon}
            />) : null }
        </View>
    );
}; 

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        height:40,
        borderRadius:40,
        paddingLeft:10,
        fontSize: 16,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    clearIcon: {
        position:'absolute',
        right:10,
    },
    container: {
        justifyContent:'center',
    },
});

export default SearchBar;
