import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Screens from "./ScreenNames"
import Colours from "./Colours"

const CreateNewTask = ({navigation, item}) =>{

    const [title, setTitle] = useState( (item?.title ) ? item.title : '' );
    const [text, setText] = useState('');

    return(
        <View style= {styles.container}>
            <Text style= {styles.label}>Enter Title</Text>
            <TextInput value = {title} onChangeText = {(text) => setTitle(text)}  style= {styles.input}/>
            <Text style= {styles.label}>Other Notes</Text>
            <TextInput value = {text} onChangeText = {(text) => setText(text)}  style= {styles.input}/>
            <Button title= "Done"
            onPress= {() =>{
                // dispatch(actions.addBlogPost(title, text));
                navigation.navigate(Screens.Home);
                }}/>
        </View>
    );
}


const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 3,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    padding: 5,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colours.Background,
  },
});



// export default connect((state)=> ({}))(CreateScreen);
export default CreateNewTask;