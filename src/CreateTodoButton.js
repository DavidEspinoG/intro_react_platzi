import React from "react";

function CreateTodoButton(props){
    return(
        <div className="button-container">
            <button
            onClick={() => {
                console.log('click')
            }}
            className="button">+</button>
        </div>
        
    );
}

export { CreateTodoButton }