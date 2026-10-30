import React from 'react';

function Header() {
    return <h1>Welcome</h1>;
}

class Message extends React.Component {
    render() {
        return <p>This is a class component</p>;
    }
}

function App() {
    return <div><Header /><Message /></div>;
}
export default App;
