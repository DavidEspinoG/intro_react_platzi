import React from "react";
import { TodoContext } from './TodoContext'
function CreateTodoButton(props){
    const { setOpenModal } = React.useContext(TodoContext)
    return(
        <div className="button-container">
            <button
            onClick={() => {
                setOpenModal(prevState => !prevState)
            }}
            className="button">+</button>
        </div>
        
    );
}

export { CreateTodoButton }