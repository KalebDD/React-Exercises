// Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Create a react component
const App = () => {

    return (
        <div>
            <div className="container">
                <h2>Learning React Repo Layout</h2>
                <p>Every branch is a different exercise or application</p>
                    <ol>
                        <li>
                            <span className='list-header'>jsx-ex</span>
                            <ul>
                                <li>Intro to JSX</li>
                                <li>How to call variables / syntax</li>
                            </ul>
                        </li>
                        <li>
                        <span className='list-header'>components-ex</span>
                        <ul>
                            <li>Intro to react components</li>
                            <li>Creation and implementation in other files</li>
                        </ul>
                    </li>
                        <li>
                            <span className='list-header'>seasons</span>
                            <ul>
                                <li>Small app that shows 2 weather options dependent on user's geolocation</li>
                            </ul>
                        </li>
                    </ol>
            </div>
        </div>
    );
};
// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);