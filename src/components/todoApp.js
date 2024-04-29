import { useState } from "react";

export default function TodoApp() {

    const [title, setTilte] = useState("");
    const [toDos, setToDos] = useState([]);

    /* function handleClick(e) {
        e.preventDefault();
        setTilte("Texto");
    } */

    function handleChange(e) {
        const value = e.target.value;
        
        setTilte(value);
    }

    function handleSubmit (e) {
        e.preventDefault();

        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const toDoTemp = [ ... toDos];
        toDoTemp.unshift(newToDo);

        setToDos(toDoTemp);
    }

    return <div className="todoContainer">
        <form className="todoCreateForm"onSubmit={ handleSubmit }>
            <input onChange={ handleChange } className="todoInput" value={ title }></input>
            <input onClick={ handleSubmit }
                type="submit"
                value="Create to do"
                className="buttonCreate">
            </input>
        </form>
    </div>
}