import React from "react";
import { StyleSheet, Image, TouchableOpacity, Alert} from "react-native";

export default FloatingButton = ( {onPressAction} ) => {

  FloatingButtonEvent=()=>{
      Alert.alert("Floating Button Clicked");
  }

     return (
       <TouchableOpacity
         activeOpacity={0.5}
        //  onPress={FloatingButtonEvent}
         onPress={onPressAction}
         style={styles.TouchableOpacityStyle}
       >
         <Image
           source={require("../assets/floatingButton.png")}
           style={styles.FloatingButtonStyle}
         />
       </TouchableOpacity>
     );
        }


const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});