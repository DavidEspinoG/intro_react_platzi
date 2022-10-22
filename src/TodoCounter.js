import React from "react";
function TodoCounter({ total, completed }){
    return(
        <h2 className="TodoCounter">Has completado {completed} de {total} pendientes</h2>
    );
}
export { TodoCounter };