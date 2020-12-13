import React from 'react'

// Functional component
// function HelloWorld(props){
//   return (
//     <h1>Hello {props.name}</h1>
//   );
// }

// Class component
class HelloWorld extends React.Component {
  render() {
    return (
      <div className="mb-2">
        <h1>Hello {this.props.name}!</h1>
      </div>
    )
  }
}

export default HelloWorld;