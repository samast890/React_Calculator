import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };
  const handleSum = () => {
    try {
      // Check if the length of the value is less than 1
      if (value.length < 1) {
        setValue('');
        return;
      }

    const result=eval(value);

    setValue(String(result));
  }
  catch(error){
    setValue('Error');

  }
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <form action="">
          <div className='display'>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={handleClick} />
            <input type="button" value="/" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="*" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="+" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="-" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input type="button" value="="  className='equal' onClick={handleSum} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
