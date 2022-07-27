import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage';
import ContactPage from './pages/contactPage';
import CaseStudiesPage from './pages/caseStudiesPage';
import ResponsiveAppBar from './components/Header/Navbar';
import FooterComponent from './components/FooterComponent/footerComponent';
import { useSelector} from 'react-redux';
import { 
  Routes,
  Route, } 
from 'react-router-dom';



function App() {
  const isEnglish = useSelector((state)=>state.language.isEnglish);
  return (
    <>
      <ResponsiveAppBar/>
      <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/Experience' element={<HomePage/>}></Route>
          <Route exact path='/projects' element={<CaseStudiesPage/>}></Route>
          <Route exact path='/contact' element={<ContactPage/>}></Route>
      </Routes>
      <FooterComponent isEnglish={isEnglish}/>
    </>
  );
}

export default App;
