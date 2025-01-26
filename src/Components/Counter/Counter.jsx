import React, { useState } from "react";

import styles from './Counter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('white');
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);

    const countInc = () => {
        setCount(count + 1);
    }
    const countDec = () => {
        setCount(count - 1);
    }
    const handleClear = () => {
        setCount(0);
    }
    const changeColor = (e) => {
        setColor(e.target.value);
    }

    const changeInput = (e) => {
        setTodoInput(e.target.value)
    }

    const createTodo = () => {
        const newarr = [...todos, todoInput];
        setTodos(newarr);
        setTodoInput('');
    }

    return (
        <div className={styles.Container}>
            <div style={{
                textAlign: "center",
                display: "block"
            }}>
                <h2>Counter</h2>
                <h3>{count}</h3>
                <button onClick={countInc}>+</button>{" "}
                <button onClick={countDec}>-</button>{" "}
                <button onClick={handleClear}>Clear</button>
            </div>

            <div style={{
                backgroundColor: color,
                height: '300px',
                width: '300px',
                margin: 25,
                border: '1px solid',
                display: "inline-block"
            }}>
            </div><br />
            <label htmlFor="color" > Choose Color</label>
            <input type="color" id="color" name="color" onChange={changeColor} />
            <br />
            <div style={{
                height: '300px',
                width: '300px',
                margin: 25,
                border: '1px solid',
                display: "inline-block"
            }}>
                <label htmlFor="Todo" > Enter ToDos</label>
                <input type="text" id="Todo" name="Todo" value={todoInput} onChange={changeInput} />
                <button onClick={createTodo}>Create ToDo</button>
                <ul>
                    {todos.map((todoName, i) => (
                        <li>
                            {todoName}
                            &nbsp;&nbsp;
                            <button onClick={() => {
                                const oldArr = [...todos];
                                oldArr.splice(i, 1);
                                setTodos(oldArr)
                            }}> X </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Counter;
