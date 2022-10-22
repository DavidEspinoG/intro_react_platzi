import React from "react";
function TodoList(props){
    return(
        <section className="todoList">
            {props.children}
        </section>
    );
}

export { TodoList }