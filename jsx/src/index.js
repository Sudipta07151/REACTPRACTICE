//STEP1-> import react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// STEP2->Create a react component

// const buttonText = () => {
//     return "Click me :)"
// }

const App = () => {
    // const buttonText = "Click me :)";

    const buttonText = { text: 'Click me' };

    return (
        <div>Hi from React App!
            <p>FRONT END FRAMEWORKS</p>
            <ul>
                <li>VUE</li>
                <li>REACT</li>
                <li>ANGULAR</li>
            </ul>
            <label className="" htmlFor="name">Enter Name</label>
            <input id="name" type="text" />
            <button style={{ display: 'block', marginTop: '20px', backgroundColor: 'pink', padding: '4px 2px', borderRadius: '10%' }}>
                {buttonText.text}</button>
        </div>
    );
};

//*** JSX SYNTAX DIFF: class as className */
//*** in style: margin-top as marginTop background-color as backgroundColor and so on...*/


//STEP3->take the react component and show it on screen

ReactDOM.render(
    //take the App component created above
    <App />,
    document.querySelector('#root')
);