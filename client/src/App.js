import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddUser from './Routes/AddUser';
import Home from './Routes/Home';
import Map from './Routes/Map';
import NotFound from './Routes/NotFound';
import AppNavbar from './Components/AppNavbar'

import FormikForm from './Routes/FormikForm'

function App() {
  return (
    <Router>
        <div className="App">
        <AppNavbar />
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/form' element={<FormikForm/>} />
              <Route exact path='/add-user' element={<AddUser/>} />
              <Route exact path='/map' element={<Map/>} />
              <Route path='/*' element={<NotFound/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;