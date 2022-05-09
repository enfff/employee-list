import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddUser from './routes/AddUser';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import AppNavbar from './components/AppNavbar'

function App() {
  return (
    <Router>
        <div className="App">
        <AppNavbar />
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/add-user' element={<AddUser/>}></Route>
              <Route path='/*' element={<NotFound/>}></Route>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;