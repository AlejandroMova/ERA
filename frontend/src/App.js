import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

import Navbar from './components/Navbar'; 
import Nosotros from './pages/Nosotros'; 
import Clientes from './pages/Clientes'; 
import Productos from './pages/Productos'; 
import Ventaja from './pages/Ventaja'; 
import Materiales from './pages/Materiales'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route
              path="/"
              element={<Nosotros />} 
              />
              <Route
              path="/clientes"
              element={<Clientes />} 
              />
              <Route 
              path="/productos"
              element={<Productos />}
              />
              <Route 
              path="/ventaja"
              element={<Ventaja />}
              />
              <Route 
              path="/materiales"
              element={<Materiales />}
              />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
