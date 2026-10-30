function App() {
    function showMessage() {
        alert('Button Clicked');
    }
    return <button onClick={showMessage}>Click Me</button>;
}
export default App;
