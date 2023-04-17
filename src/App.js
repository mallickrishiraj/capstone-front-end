import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {BrowserRouter , Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import Footer from './components/Footer';
import Policy from "./components/Policy";
import Contact from "./components/Contact";
import About from './components/About';
function App() {
  return (
    <div className="App">
       <Navbar/>
       
       <BrowserRouter>
       
          <Route path="/" exact component={Homescreen} />
          <Route path="/cart" exact component={Cartscreen}/>
          <Route path="/register" exact component={Registerscreen}/>
          <Route path='/login' exact component={Loginscreen}/>
          <Route path='/orders' exact component={Ordersscreen}/>
          <Route path='/admin' component={Adminscreen}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/policy" exact component={Policy}/>
          
            <Link to="about"></Link>
            <Link to="contact"></Link>
            <Link to="policy"></Link>
         
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;