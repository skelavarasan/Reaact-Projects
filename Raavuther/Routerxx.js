import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function SimpleForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <Controller
          name="name" // Ensure this matches the field name in the data object
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="text" {...field} />
          )}
        />
        <p>{errors.name && errors.name.message}</p>
      </div>
      <div>
        <label>Email:</label>
        <Controller
          name="email" // Ensure this matches the field name in the data object
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="email" {...field} />
          )}
        />
        <p>{errors.email && errors.email.message}</p>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default SimpleForm;