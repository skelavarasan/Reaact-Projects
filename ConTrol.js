import React from 'react'
import { Controller, useForm } from 'react-hook-form'

function ConTrol() {

       const { handleSubmit, control } = useForm();

       const onSubmit = (data)=>{
            console.log(data);
       }


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label htmlFor='name'>Name : </label>
              <Controller name='name' control={control} defaultValue="" render={({field})=><input{...field}/>} />
          </div>

        <div>
            <label htmlFor='email'>E-mail : </label>
            <Controller name='email' control={control} defaultValue="" render={({field})=><input{...field}/>}/>
        </div>

        <button type='submit'>Submit you mf</button>

        </form>
    </div>
  )
}

export default ConTrol