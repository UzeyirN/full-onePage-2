import React, { useState } from 'react'
import '../Add/Add.css'
import axios from 'axios'
const Add = () => {

    const [state, setState] = useState({
        image: "",
        category: "",
        brend: "",
        value: null
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const addProducts = (e) => {
        e.preventDefault();

        if (!state.image || !state.category || !state.brend || !state.value) return;

        axios.post("http://www.localhost:3035/products", state);
       
    };
    return (
        <>
            <div className='input-wrapper'>
                <form className='add-form' onSubmit={addProducts}>
                    <input style={{ margin: "0 5px" }} type="text" name='image' value={state.image} placeholder="image url" onChange={handleChange} />
                    <input style={{ margin: "0 5px" }} type="text" name='category' value={state.category} placeholder="category" onChange={handleChange} />
                    <input style={{ margin: "0 5px" }} type="text" name='brend' value={state.brend} placeholder="brend" onChange={handleChange} />
                    <input style={{ margin: "0 5px" }} type="number" name='value' value={state.value} placeholder="value" onChange={handleChange} />
                    <button style={{ padding: "5px 15px" }}>Add</button>
                </form>

            </div>
        </>
    )
}

export default Add