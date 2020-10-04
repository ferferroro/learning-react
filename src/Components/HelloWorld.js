import React from 'react';

// // hello world now accepts props 
// // see App.js and we passed 'name' props 
// function HelloWorld(props) {
//     return (
//     <h1>Hello {props.name}</h1>
//     )
// }


// Create a class based component
class HelloWorld extends React.Component {
    render() {
        return (
            <h1> Hello {this.props.name}! </h1>
        )
    }
}

export default HelloWorld;