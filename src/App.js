import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AddUser from './routes/AddUser';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="content">
            <Routes>
            <Route exact path='/home' element={<Home/>}></Route>
              <Route exact path='/add-user' element={<AddUser/>}></Route>
              <Route path='/*' element={<NotFound/>}></Route>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;