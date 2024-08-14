import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {

  const [formData, setFormData] = useState({
    input1: '',
    input2: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (data) => {
 
    if (
      data.input1.trim().length >= 3 &&
      !data.input1.startsWith(' ') &&
      data.input2.length >= 6 &&
      !data.input2.startsWith(' ') 
    ) {
      setFormData(data);
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
  <div className="App">
      <h1>Carga de estudiantes</h1>
      <Form onSubmit={handleSubmit} />
      {error && <p style={{ color: 'red' }}>Por favor valida que la información sea correcta</p>}
      {submitted && <Card input1={formData.input1} input2={formData.input2} />}
    </div>
  )
};

export default App;
