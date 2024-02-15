import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from './components/Goalitem';
import GoalInput from "./components/Goalinput";



export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible , setModalIsVisible] = useState(false);//it's handling the modal when we press on the button it only appears then 

  function addGoalHandler(goalEnteredText){
   setCourseGoals(currentgoals => [...currentgoals,{text : goalEnteredText , id : Math.random().toString()}])//here we have an existing array coursegoals so we take it as a parameter now it's currentGoals and by using spread operator we get the existing array and append the new array ...
   endGoalHandler();
  }
  function deleteItems(id){
    setCourseGoals(currentgoals => {//when we are updating an existing state the we update it through the function as setcoursegoals is an existing state
     return currentgoals.filter((goal) => goal.id !== id);//so here filter is going to return an old array minus the dropeed item whch matches the id of the selected item
    });
  }
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endGoalHandler(){
    setModalIsVisible(false);
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add a new Goal" color="#a065ec" onPress={startAddGoalHandler} />
      <GoalInput visible ={modalIsVisible} onAddGoal ={addGoalHandler} onCancel ={endGoalHandler} />
      <View style = {styles.goalsConatiner}>
      {/* <ScrollView> */}
        {/* {courseGoals.map((goal)=> <Text style= {styles.goalItem} key={goal}>{goal}</Text>)} */}
        {/* here we render all the course goals by using map function as it is a string so we can use text prop to render that array.. and key should be unique here we are doing this using scroll view in the next we are doing this by flatlist  */}
      {/* </ScrollView> */}
      {/* Now we are doing this by using Flatlist  */}
      {/* <FlatList data={courseGoals} renderItem={(itemData) =>{
      return <Text style= {styles.goalItem}>{itemData.item.text}</Text>
      }
      }
      keyExtractor={(item,index)=>  {
      return item.id;
    }
    } /> */}
    {/* // here flatlist is rendering lists now we re doing this by component base... */}

    <FlatList data={courseGoals} renderItem={(itemData) =>{
      return <GoalItem  text ={itemData.item.text} id ={itemData.item.id} onDeleteItem= {deleteItems} />
      }
      }
      keyExtractor={(item,index)=>  {
      return item.id;
    }
    } />
     
      </View> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer :{
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 16,
    backgroundColor : "#1e085a"
  },
  goalsConatiner : {
    flex : 5,
  },
  
});
