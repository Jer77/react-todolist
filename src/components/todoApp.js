import { useState } from "react";

export default function TodoApp() {

    const [title, setTilte] = useState("");

    function handleClick(e) {
        e.preventDefault();
        setTilte("Texto");
    }

    function handleChange(e) {
        const value = e.target.value;
        
        setTilte(value);
    }

    return <div className="todoContainer">
        <form className="todoCreateForm">
            <input onChange={ handleChange } className="todoInput" value={ title }></input>
            <input onClick={ handleClick }
                type="submit"
                value="Create to do"
                className="buttonCreate">
            </input>
        </form>
    </div>
}