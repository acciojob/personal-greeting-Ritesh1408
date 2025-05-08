
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }


    useEffect(() => {
        if (name) {
            setGreeting(`Hello ${name}!`);
        } else {
            setGreeting('');
        }
    }, [name]);

  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: "30px" }}>
                <h1>Welcome User's</h1>
                <label>Enter your name:</label>
                <input
                    type="text"
                    placeholder='Enter your name'
                    value={name}
                    onChange={handleChange}
                    style={{ width: "300px" }}
                />
                <p className='output'>{greeting}</p>
        </div>
    </div>
  )
}

export default App
