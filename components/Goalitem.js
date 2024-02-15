import { View,StyleSheet,Text,Pressable } from "react-native";

export default function GoalItem(props){
    return (
      //here bind is js builtin function which basically allows you to pre-configure a function for future execution and  takes second argument as a prop...
    <View style= {styles.goalItem}>
      <Pressable android_ripple={{color : '#210644'}} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}> {props.text} </Text>
        </Pressable>
    </View>
    );
}
const styles = StyleSheet.create({
    goalItem : {
        margin : 6,
        borderRadius : 6,
        backgroundColor : '#5e0acc',
      },
      goalText :{
        padding : 8,
        color : 'white'
      }
})


