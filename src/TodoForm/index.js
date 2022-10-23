import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo, 
        setOpenModal,
    } = React.useContext(TodoContext);
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue !== ''){
            addTodo(newTodoValue);
        }
        setOpenModal(false);
        setNewTodoValue('')
    }
    return(
        <div className="modal">
            <form onSubmit={onSubmit}>
                <input
                value={newTodoValue} 
                onChange={onChange}
                placeholder="¿Cuál es tu pendiente?"
                ></input>
                <div className="form-buttons">
                    <button type="button" onClick={onCancel}>Cancelar</button>
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </div>
        
        
    )
}
export { TodoForm };