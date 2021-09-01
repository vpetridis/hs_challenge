import logo from "./logo.svg"
import "./App.css"
import { Header } from "./components/Header"
import { Button } from "./components/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Button text="Hello" />
      </header>
    </div>
  )
}

export default App
