import { useState } from "react";
import Todo from "./todo";


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

    function handleSubmit(e) {
        e.preventDefault();

        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const toDoTemp = [...toDos];
        toDoTemp.unshift(newToDo);

        setToDos(toDoTemp);

        setTilte("");
    }

    function handleUpdate (id, value) {
        const temp = [...toDos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setToDos(temp);
    }

    function handleDelete (id) {
        const temp = toDos.filter(item => item.id !== id);

        setToDos(temp);

    }

    return <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}></input>
            <input onClick={handleSubmit}
                type="submit"
                value="Create to do"
                className="buttonCreate">
            </input>
        </form>

        <div className="toDosContainer">
            {
                toDos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
                ))
            }
        </div>
    </div>
}