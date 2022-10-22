import React from "react";

function TodoSearch({ searchValue, setSearchValue }){
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