import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useHeaderHeight } from "@react-navigation/stack";
import colors from '../misc/colors';

const formatDate = (ms) =>{
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
}

const NoteDetail = (props) => {
    
    const {note} = props.route.params
    const headerHeight = useHeaderHeight()

    return (
        <ScrollView contentContainerStyle={[styles.container, {paddingTop: headerHeight}]}>
            <Text style={styles.time}>{`Created At ${formatDate(note.time)}`}</Text>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.desc}>{note.desc}</Text>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex:1,
        paddingHorizontal:15,
    },
    time: {
        textAlign:'right',
        fontSize: 13,
        opacity:0.5,
        
    },
    title: {
        fontSize: 30,
        fontWeight:'bold',
        color: colors.PRIMARY,
    },
    desc: {
        fontSize:20,
        opacity:0.6,
    },
});

export default NoteDetail;
