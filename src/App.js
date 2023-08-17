import data from './data.json';
import Truck from './Truck';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav data={data} />

      <Routes>
        <Route path={"HOME"} element={<Default />} />
        {
          data.map(
            truck => (
              <Route key={truck.model} path={`${truck.model}`} element={<Truck truck={truck} />} />
            )
          )
        }
      </Routes>

    </Router>
  );
}

export default App;

function Default()
{
  return(
    <div class="container component">
    <h1>Welcome to the Comp.6210 Practise react application</h1>
    <p>Use the menu above to navigate the application.</p>
    </div>
  )
}