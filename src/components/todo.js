import { useState } from "react"

export default function Todo({ item, onUpdate, onDelete }) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit (e) {
            e.preventDefault();
            
        }

        function handleChange (e) {
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClick () {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}></input>
                <button className="button" onClick={handleClick}>Update</button>
            </form>
        );
    }

    function TodoElement() {
        return (
            <div className="todoInfo">
                {item.title} <button onClick={() => setIsEdit(true)}>Editar</button>
                <button onClick={(e) => onDelete(item.id)}>Eliminar</button>
            </div>
        );
    }

    return (
        <div className="todo">
            { isEdit ? <FormEdit></FormEdit> : <TodoElement></TodoElement> }
        </div>
    )

}