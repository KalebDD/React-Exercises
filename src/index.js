// Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = {text: 'Click Me!'};
    const labelText = 'Enter name:';

    return (
        <div>
            <div>
                <h3>Testing how to call variables in React</h3>
                <label className="label" htmlFor="name">{labelText}</label>
                <input id="name" type="text"/>
                <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
            </div>
        </div>
    );
};
// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);