import { createSlice } from "@reduxjs/toolkit";

export const Slice=createSlice({
    name:'todo',
    initialState:{
        name:"",
        description:"",
        isCompleted:false,
        List:[]
    },
   reducers:{
     setName:(state,action)=>{
        state.name=action.payload
    },
    setDescription:(state,action)=>{
        state.description=action.payload
    },
    addTask:(state)=>{
        let list=state.List;
        list.push({id:Date.now(),name:state.name,description:state.description,isCompleted:state.isCompleted});
        state.name=''
        state.description=''

    },
    deleteTask:(state,action)=>{
        state.List=state.List.filter((task)=>task.id!==action.payload);    
    },
    completed:(state,action)=>{
        let task=state.List.find((task)=>task.id==action.payload);
        if(task){
            task.isCompleted=true
        }

    }
   }
})

export const {setName,setDescription,addTask,deleteTask,completed}=Slice.actions;
export default Slice.reducer