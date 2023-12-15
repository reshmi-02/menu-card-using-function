
import './App.css';
import Header from './components/header.js';
import './components/header.css';
import Food from './components/food.js'

function App() {

  const foodstyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "70%",
    margin: "auto",
  }

  return (
    <div style={{ backgroundColor: "rgb(252, 250, 179)" }}>

      <Header />

      <div style={foodstyle}>

        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />

      </div>

      <div>

        <p style={{ color: "rgb(54, 53, 49)", textAlign: "center",paddingTop:"3%" }}>
          We are happy to welcome you between 12:00 and 22:00
        </p>
        
      </div>

    </div>


  )
}

export default App;
