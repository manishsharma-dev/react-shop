import React, { Component } from 'react'
import Navbar  from './components/navbar';
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>My Shop</h1>
      </div>
    )
  }
}

export default App
