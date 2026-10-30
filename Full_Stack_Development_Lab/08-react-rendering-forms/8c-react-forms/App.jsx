import { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');

    return (
        <div>
            <input
                placeholder="Enter Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <select value={course} onChange={e => setCourse(e.target.value)}>
                <option value="">Select Course</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
            </select>
            <h3>{name}</h3>
            <h3>{course}</h3>
        </div>
    );
}
export default App;
