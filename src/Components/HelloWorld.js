import React from 'react'

// Functional component
// function HelloWorld(props){
//   return (
//     <h1>Hello {props.name}</h1>
//   );
// }

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}

export default HelloWorld;