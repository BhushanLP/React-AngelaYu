import './App.css';
import { add, division, multliplication, substract } from './assets/components/calculate';
// import * as Calculator from './assets/components/calculate';
import Header from './assets/components/Header';
import Lists from './assets/components/lists';

const name = 'Bhushan Paradkar';
const now = new Date();
const currentYear = now.getFullYear();   // e.g., 2026
const customeStyle = {
  color:'red',
  border: '2px solid black'
}

function App() {

  return (
    <>
       <Header />
    <div>
      <h1 className="name">{name}</h1>
<Lists />
<ul>
  <li>{add(1,2)}</li>
  <li>{substract(5,3)}</li>
  <li>{multliplication(3,2)}</li>
  <li>{division(7,2)}</li>
</ul>
{/* <ul>
  <li>{Calculator.add(1,2)}</li>
  <li>{Calculator.substract(5,3)}</li>
  <li>{Calculator.multliplication(3,2)}</li>
  <li>{Calculator.division(7,2)}</li>
</ul> */}
      <img src="https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg" alt="cat" />

      <footer style={customeStyle}>Copyright {currentYear } </footer>
    </div>
    </>
  )
}

export default App
