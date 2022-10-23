import React from "react";
import { TodoContext } from '../TodoContext';
import { Title } from '../Title';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'
function AppUI(){
    const {
        error,
        loading, 
        searchedTodos, 
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext)
    
    return(
        <React.Fragment>
            <Title/>
            <TodoSearch/>
            <TodoList>
                {error && <p>Ups, hubo un error</p>}
                {loading && <p>Cargando, no desesperes</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer ToDo!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    ></TodoItem>
                )) }
            <CreateTodoButton/>
            </TodoList>
            <TodoCounter/>    
            {openModal === true && (
                <Modal>
                    <TodoForm></TodoForm>  
                </Modal> 
            )}  
        </React.Fragment>
    )
}
export { AppUI }