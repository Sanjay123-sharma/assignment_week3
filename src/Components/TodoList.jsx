
import { useDispatch, useSelector } from 'react-redux'
import { addTask, completed, deleteTask,  setDescription, setName } from '../Store/Slice';

export default function TodoList() {
    const name=useSelector((state)=>state.todo.name)
    const description=useSelector((state)=>state.todo.description)
    const List=useSelector((state)=>state.todo.List);
    const dispatch=useDispatch()
    const handleName=(e)=>{
        dispatch(setName(e.target.value));
    }

    const handleDescription=(e)=>{
        dispatch(setDescription(e.target.value))
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        if(name.trim().length===0 || description.trim().length===0){
            alert("Fill the both Fields")
        }
        else{
            dispatch(addTask())
            alert("List Updated !");
        }
        console.log(List)
    }

    const handleDelete=(id)=>{
        dispatch(deleteTask(id))
        console.log(id);
        alert("List Updated !")
    }
    const handleCompleted=(id)=>{
        dispatch(completed(id))

    }  
  return (
    <div className='first'>    
        <div className='head'>
               <div className='head-h'>
                 <h1 >Todo List</h1>
                <h3 >Stay Organized, one task at a time </h3>
               </div>
            
                    
               <div className='head-f'>
                 <form onSubmit={handleAdd} >
                <input type="text" placeholder='Task Name' value={name}  onChange={handleName} id='input'/><br /><br />
                <input type="text" placeholder='Task Description' value={description} onChange={handleDescription} id='input'/><br /><br />
                <button id='btn'>ADD TASK</button>            
                </form>                 
               </div>
            
        </div>

        <div>
            
            <div style={{margin:"1rem"}} className='bottom'>
                {
                        List.length===0 ?<h4 style={{fontFamily:"initial",color:'rgb(113, 113, 248)'}}>No tasks available.</h4>:''
                }
                {
                    List.map((task,i)=>(
                        <div key={i} style={{gap:'10px'}} className='list' >
                            <div className='item'>
                                <div style={{color:task.isCompleted?'green':'blue',fontSize:"30px"}}>{task.name}</div>
                            <div style={{color:task.isCompleted?'green':'blue'}}>{task.description}</div>
                            <div><button onClick={()=>handleDelete(task.id)} id='btn3'>DELETE</button></div>
                                <div><button onClick={()=>handleCompleted(task.id)} id='btn4'>COMPLETED</button></div> 
                            </div>
                            <div >
                                                           
                            </div>
                            
                        </div>
                        
                    ))
                }
            </div>
        </div>

    </div>
         
    
  )
}
