import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Party from './redux-thunk/Admin/Party';
import Connection from './redux-thunk/Admin/Connection';
import User from './redux-thunk/Admin/User';
import Election from './redux-thunk/Admin/Election';
import Dashboard from './redux-thunk/Admin/Dashboard';
import UserLoginForm from './redux-thunk/voter/UserLoginForm';
import Voter from './redux-thunk/voter/Voter';



function App() {
  return (
    <div className="App">      
      
      <Routes>
        <Route path='/' exect element={<Home />}/>
        <Route path='/UserLoginForm' exect element={<UserLoginForm/>}/>
        <Route path='/Dashboard' exect element={<Dashboard/>}/>
        <Route path='/party' exect element={<Party/>}/>
        <Route path='/connection' exect element={<Connection/>}/>
        <Route path='/user' exect element={<User/>}/>
        <Route path='/election' exect element={<Election/>}/>
        <Route path='/Voter' exect element={<Voter />}/>
      </Routes>
    </div>
  );
}

export default App;
