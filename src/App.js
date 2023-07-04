import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Navbar from './components/Navbar.jsx';
import About from './Pages/About.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './Pages/NotFound.jsx'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>        
        
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
