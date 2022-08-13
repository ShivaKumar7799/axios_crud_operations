import './App.css';
import Create from './Components/Create';
import { BrowserRouter as Router,Routes, Route , Link} from 'react-router-dom'
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className = "main" >
      <h2 className="main-header">React Crud Operations</h2>   
      
      <Router>
      <nav className='nav-elements' >
        <Link to = "/" >Home</Link> 
        <Link to = "/create" >Crate</Link>
        <Link to = "/read" > Read</Link>
        <Link to = "/update">Update</Link> 
      </nav>
        <Routes>      
            <Route path = "/" element = {<h1>Home</h1> } />
            <Route path="/create" element = {<Create />} />
            <Route path ="/read" element = {<Read />} />
            <Route path = "/update" element = {<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
