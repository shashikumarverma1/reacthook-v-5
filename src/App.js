import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Userefhook from './hooks/Userefhook';
import Navbar from './hooks/Navbar';
import Usememo1 from './hooks/Usememo1';
import Usecallback from './hooks/Usecallback';
import Uselayouteffect from './hooks/Uselayouteffect';
import Usereducer1 from './hooks/Usereducer1';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
        <Routes>
              <Route path='/' element={<Userefhook/>}/>
              <Route path='/usememo' element={<Usememo1/>}/>
              <Route path='/usecallback' element={<Usecallback/>}/>
              <Route path='/Uselayouteffect' element={<Uselayouteffect/>}/>
              <Route path='/Usereducer' element={<Usereducer1/>}/>
        </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
