import React, { Fragment } from 'react'
import axios from '../../Axios'

export default function Input() {
    const [description, setDescription] = React.useState('')

    const AddTodoHandler = async e => {
        e.preventDefault();
        try {
            await axios.post('/todos', { description }, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            });
            setDescription('')
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <div className="mt-5">
                <form className="d-flex" onSubmit={AddTodoHandler}>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                    <button className="btn btn-success">Add</button>
                </form>
            </div>
        </Fragment>
    )
}
