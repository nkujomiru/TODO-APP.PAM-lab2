import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const TextInputField = ({term, onChange}) =>{
return(
    <View style ={styles.backgroundStyle}>
        <Feather name = 'search' style={styles.iconStyle} />
        <TextInput
        value = {term}
        onChangeText = {onChange}
        placeholder = "Enter text to search task"
        autoCapitalize = 'none'
        autoCorrect = {false}
        style = {styles.inputStile}
        ></TextInput>
    </View>
);
}

const styles = StyleSheet.create({
    backgroundStyle: 
    {
        marginTop: 5,
        marginBottom: 2,
        backgroundColor: '#DDDDDD',
        height: 35,
        borderRadius: 5,
        marginHorizontal:8,
        flexDirection: 'row'
    },
    inputStile:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize: 24,
        alignSelf: 'center',
        marginHorizontal:7
    }
});

export default TextInputField;