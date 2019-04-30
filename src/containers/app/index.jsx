import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Quarto from '../quarto'
const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main className="App container">
      <Route exact path="/" component={Quarto} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/quarto" component={Quarto} />
    </main>
  </div>
)

export default App
