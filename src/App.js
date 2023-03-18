import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddCustomer from './customers/AddCustomer';
import EditCustomer from './customers/EditCustomer';
import ViewCustomer from './customers/ViewCustomer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element ={<Home/>}/>
          <Route exact path="/add" element ={<AddCustomer/>}/>
          <Route exact path="/edit/:id" element={<EditCustomer/>}/>
          <Route exact path="/view/:id" element={<ViewCustomer/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
