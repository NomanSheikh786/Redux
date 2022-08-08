import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createTodo } from './redux/action/TodoAction'
export default function Todo() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.todoReciving)
  console.log(data.myData);
    const addTodo = () => {


      dispatch(createTodo("hello" ))


    }

    

    // const Noman =(a,b)=>{
    //   console.log(a+b)
    //   }
  
    //   Noman(1,5)

    // var person = {name : "john", email: "kahn@gmail.com"};

    //   console.log(person.name)



    
return(


    <View>
    <View style={{flexDirection:"row"}}>
      <View>
    <TextInput
       style={{  height: 80,
      margin: 12,
      borderRadius:10,
      borderWidth: 2,
      padding: 20,
  width:280}}
       placeholder='Type Text'>
        
       </TextInput>
       </View>
       
       <View>
         <TouchableOpacity style={{margin: 20,padding:20,Color:"blue",backgroundColor:"skyblue",borderRadius:10,width:80}} onPress={addTodo}>
        <Text style={{textAlign:"center"}}> Add</Text>
        </TouchableOpacity>
        </View>
    </View>
    
       
      </View>
  )
}

const styles = StyleSheet.create({})