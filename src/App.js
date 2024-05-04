import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Deshboard from './redux-thunk/Admin/Deshboard';
import Party from './redux-thunk/Admin/Party';
import Connection from './redux-thunk/Admin/Connection';
import User from './redux-thunk/Admin/User';
import Election from './redux-thunk/Admin/Election';

function App() {
  return (
    <div className="App">      
      
      <Routes>
        <Route path='/' exect element={<Home />}/>
        <Route path='/Deshboard' exect element={<Deshboard/>}/>
        <Route path='/party' exect element={<Party/>}/>
        <Route path='/connection' exect element={<Connection/>}/>
        <Route path='/user' exect element={<User/>}/>
        <Route path='/election' exect element={<Election/>}/>
      </Routes>
    </div>
  );
}

export default App;
