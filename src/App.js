import React, { Component } from 'react'

import './App.css'

import GuessCount from './GuessCount'
import Card from "./Card";

class App extends Component {
    render() {
        return (
            <div className="memory">
            <GuessCount guesses={0} />
            <Card/>
            <div/>
        )
    }
}

export default App