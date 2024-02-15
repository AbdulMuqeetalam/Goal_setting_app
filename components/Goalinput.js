import { View, TextInput, Button, StyleSheet ,Modal, Image } from "react-native";
import { useState } from "react";


export default function GoalInput(props) {
    const [goalEnteredText, setgoalEnteredtext] = useState('');

    function inputHandler(enteredText) {
        setgoalEnteredtext(enteredText)
    }
    function addGoalHandler() {
        props.onAddGoal(goalEnteredText);
        setgoalEnteredtext('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style ={styles.Image} source={require('../assets/goal.png')} />
            <TextInput style={styles.textInput} placeholder="Your Course Goals" onChangeText={inputHandler} value={goalEnteredText} />
            <View style = {styles.ButtonContainer}>
                <View style = {styles.Button}>
                 <Button title="Cancel" onPress={props.onCancel} color= '#f31282' />
                </View>
                <View style = {styles.Button}>
                  <Button title="Add Goals" onPress={addGoalHandler} color= '#5e0acc' />
                </View>
            </View>
            {/* Button Has no Styling in react native and there is no omClick as well in native we have onPress */}
        </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 24,
        padding : 16,
        // borderBottomWidth: 1,
        // borderBottomColor: "#cccccc",
        backgroundColor : "#311b6b",
    },
    Image:{
        width : 100,
        height : 100,
        margin : 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor : "#e4d0ff",
        color : "#120438",
        borderRadius : 6,
        width: "100%",
        padding: 10
    },
    ButtonContainer : {
        marginTop : 16,
        flexDirection : "row"
    },
    Button : {
        width : 100,
        marginHorizontal : 8,
    }
})