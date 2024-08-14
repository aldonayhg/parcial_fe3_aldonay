import React, { useState } from 'react';
import '../styles/style.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label id='Nombre'> Nombre: </label>
        <input type="text" name="input1" value={formData.input1} onChange={handleChange}/>
        </div>

        <div>
        <label id='Apellido'> Apellido: </label>
        <input type="text" name="input2" value={formData.input2} onChange={handleChange}/>
        </div>

        <button type="submit" className="styled-button"> Enviar </button>
      </form>
    </div>
  );
};

export default Form;
