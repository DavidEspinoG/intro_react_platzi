import React from "react";
import { TodoContext } from './TodoContext';
function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }   
    return(
        <React.Fragment>
            <input 
                className="searchInput" 
                onChange={onSearchValueChange}
                placeholder="Search"
                value={searchValue}>
            </input>
        </React.Fragment>
        
    )
}
export { TodoSearch }