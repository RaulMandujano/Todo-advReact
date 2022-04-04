import { useState, useEffect, useRef } from 'react';
import '../../src/index.css';

function Form(props) {
  const [ingreso, setIngreso] = useState(props.edit ? props.edit.value : '');

  const ingresoRef = useRef(null);

  useEffect(() => {
    ingresoRef.current.focus();
  });

  const handleChange = e => {
    setIngreso(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: ingreso
    });
    setIngreso('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <div>
          <input placeholder='Update your item' value={ingreso} onChange={handleChange} name='text' ref={ingresoRef} className='inputField' />
          <button onClick={handleSubmit}>
            Update
          </button>          
        </div>
        </>
      ) : (
        <>
          <input placeholder='Add Todo' value={ingreso} onChange={handleChange} name='text' className='inputField' ref={ingresoRef}
          />
        </>
      )}
    </form>
  );
}

export default Form;