import { useState } from 'react';

function App() {
    const [name, setName] = useState('Ram');
    return (
        <div>
            <h2>Hello {name}</h2>
            <button onClick={() => setName('Ravi')}>Update</button>
        </div>
    );
}
export default App;
