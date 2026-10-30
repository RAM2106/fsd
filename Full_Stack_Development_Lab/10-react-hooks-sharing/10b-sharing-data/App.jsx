function Child(props) {
    return <h2>Hello {props.name}</h2>;
}

function App() {
    return (
        <div>
            <h1>Parent Component</h1>
            <Child name="Ram" />
        </div>
    );
}
export default App;
