function App() {
    const names = ['Ram', 'Ravi', 'Kiran'];
    return (
        <div>
            <h2>Student Names</h2>
            {names.map((name, index) => <p key={index}>{name}</p>)}
        </div>
    );
}
export default App;
