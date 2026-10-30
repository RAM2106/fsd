import { useState } from 'react';

function Greeting({ name }) {
    return <h2>Hello {name}</h2>;
}

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Greeting name="Ram" />
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
export default App;
