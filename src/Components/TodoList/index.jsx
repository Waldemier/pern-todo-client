import React from 'react'
import axios from '../../Axios'

//components
import { Todo } from '../'


export default function TodoList() {

    const [todos, setTodos] = React.useState({});

    React.useEffect(() => {
        axios.get('/todos').then(res => {
            setTodos(res.data);
        })
    }, [])

    const EditHandler = e => {
        e.target.preventDefault();

    }

    const DeleteHandler = e => {
        e.target.preventDefault();

    }

    return (
        <table class="table">
            <tbody>
                {todos.map((todo, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                            <Todo item={todo} />
                        </td>
                        <td>
                            <div className="d-flex">
                                <button className="btn btn-success" onClick={EditHandler}>Edit</button>
                                <button className="btn btn-danger" onClick={DeleteHandler}>Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
