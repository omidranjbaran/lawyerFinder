import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Navbar from './components/Navbar.jsx';
import About from './Pages/About.jsx';
import NotFound from './Pages/NotFound.jsx';
import Signup from './Pages/Signup.jsx';
import Signin from './Pages/Signin.jsx';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>        
        
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
