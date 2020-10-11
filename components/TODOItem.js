import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'

const TODOItem = ({item}) => {
    return (
      // TODO add complete task switch
      <View style={styles.row}>
        <Text style={styles.title}>
          {item.title} - {item.id}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => console.log("edit clicked")}>
            <Feather name="edit-3" style={styles.icon} color="#64e986" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              // dispatch({
              //     type: 'delete_blogPost',
              //     payload: item.id
              // })
              //   dispatch(actions.deletePost(item.id))
              console.log("trash clicked")
            }
          >
            <Feather name="trash" style={styles.icon} color="#FF5500" />
          </TouchableOpacity>
        </View>
      </View>
    ); 
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:7,
        paddingBottom: 1,
        backgroundColor: "#f2e3a5",
        borderBottomWidth: 1,
        borderColor: '#FAA85E',
        paddingHorizontal: 7,
    },
    title:{
        fontSize:23,
    },
    icon: {
        fontSize: 27,
        paddingHorizontal: 3,
    }
});

export default TODOItem;