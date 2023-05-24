import React from "react";
import { useState } from "react";
export const SearchInput = ({createTask}) => {

    const [newTask, setNewTask] = useState(''); 

    const handleSubmit = (event) => event.preventDefault();

    const handleOnChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleSendClick = () => {
        if(newTask){
            createTask(newTask);
            setNewTask('');
        } else{
            alert('Rellene el formulario')
        }
        
        
    }
    
    return (
        <form className="d-flex col gap-2 p-0" onSubmit={handleSubmit}>
            <input value={newTask} className="form-control m-auto" type="text" placeholder="Add new list" onChange={handleOnChange}/>
            <button type="submit" className="btn btn-primary m-auto p-auto w-25" onClick={handleSendClick}>Add Task</button>
        </form>
    );
};