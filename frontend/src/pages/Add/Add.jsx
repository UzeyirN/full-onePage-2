import React, {  useState } from 'react'
import '../Add/Add.css'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { inputSchema } from '../../Schema/FormValidation';




const Add = () => {

    const [state, setState] = useState({
        image: "",
        category: "",
        brend: "",
        value: null
    });


    //addProducts
    const addProducts = () => {

        if (!state.image || !state.category || !state.brend || !state.value) return;

        axios.post("http://www.localhost:3035/products", state);
    };

    //yup
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(inputSchema) });
  
    const onSubmit = (data) => {
        console.log(data);

        addProducts()
    };


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };


    return (
        <>
            <div className='input-wrapper'>
                <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("image")} className='add-input' type="text" name='image' value={state.image} placeholder="image url" onChange={handleChange} />
                    {errors.image ? (<span style={{ color: "red" }}>{errors.image?.message}</span>) : (<></>)}


                    <input {...register("category")} className='add-input' type="text" name='category' value={state.category} placeholder="category" onChange={handleChange} />
                    {errors.category ? (
                        <span style={{ color: "red" }}>{errors.category.message}</span>
                    ) : (<></>)}


                    <input {...register("brend")} className='add-input' type="text" name='brend' value={state.brend} placeholder="brend" onChange={handleChange} />
                    {errors.brend ? (
                        <span style={{ color: "red" }}>{errors.brend.message}</span>
                    ) : (<></>)}



                    <input {...register("value")} className='add-input' type="number" name='value' value={state.value} placeholder="value" onChange={handleChange} />
                    {errors.value ? (
                        <span style={{ color: "red" }}>{errors.value.message}</span>
                    ) : (
                        <></>
                    )}


                    <button className='add-btn'>Add</button>
                    {/* <input type="submit" /> */}
                </form>

            </div>
        </>
    )
}

export default Add