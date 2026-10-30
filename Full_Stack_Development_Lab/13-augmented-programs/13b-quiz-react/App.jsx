import { useState } from 'react';

function App() {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    function check() {
        setResult(answer === 'React' ? 'Correct Answer' : 'Wrong Answer');
    }

    return (
        <div>
            <h2>Quiz Application</h2>
            <h3>Which library is used for UI?</h3>
            <button onClick={() => setAnswer('Angular')}>Angular</button>
            <button onClick={() => setAnswer('React')}>React</button>
            <button onClick={check}>Submit</button>
            <h3>{result}</h3>
        </div>
    );
}
export default App;
