import React from "react";
import { TodoContext } from "../TodoContext";

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
        <form onSubmit={onSubmit}>
            <textarea
            value={newTodoValue} 
            onChange={onChange}
            placeholder="¿Cuál es tu pendiente?"
            ></textarea>
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir</button>
            </div>
        </form>
        
    )
}
export { TodoForm };