import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    StatusBar,
    Dimensions, 
} from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from "../components/RoundIconBtn";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = ({onFinish}) => {
    const [name, setName] = useState('');
    const handleOnChangeText = (text) => setName(text);
    
    const handleSubmit = async () => {
        const user = {name: name}
        await AsyncStorage.setItem('user', JSON.stringify(user))
        if (onFinish) onFinish();
    }
        

    return (
        <>
        <StatusBar hidden/>
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Enter Name to Continue </Text>
            
            <TextInput 
                value={name} 
                onChangeText={handleOnChangeText} 
                placeholder='Enter Name' 
                style={styles.textInput}
            />
        
            {name.trim().length >= 1 ? (
                <RoundIconBtn antIconName='arrowright' onPress={handleSubmit} />
            ) : null} 
        </View>
        </>
    )
}

const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color:colors.PRIMARY,
        width,
        height: 40,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize:20,
        marginBottom:15,
    },
    inputTitle:{
        alignSelf: 'flex-start',
        paddingLeft: 26,
        marginBottom:10,
        opacity: 0.5,
    },
})

export default Intro
