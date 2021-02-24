import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

//traditional/functional component

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return (
//         <div>
//             Latitude: {}
//             <SeasonDisplay />
//             REACT IS UP
//         </div>
//     );
// };

//class based component

class App extends React.Component {
    //constructor and super is a must
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMsg: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //to set state object value we must use the setState({}) function(which take in a object as a parameter)
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMsg: err.message });
            }
        );
    }

    render() {
        // return (
        //     <div>
        //         Latitude: {this.state.lat}
        //         Error: {this.state.errorMsg}
        //     </div>
        // );
        if (this.state.errorMsg && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMsg}</div>
            );
        }
        else {
            return (
                <div>Latitude: {this.state.lat}</div>
            );
        }

    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
