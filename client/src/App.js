import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage';
import ResponsiveAppBar from './components/Header/Navbar';
import FooterComponent from './components/FooterComponent/footerComponent';
import { useSelector} from 'react-redux';


function App() {
  const isEnglish = useSelector((state)=>state.language.isEnglish);
  return (
    <>
      <ResponsiveAppBar/>
      <HomePage/>
      <FooterComponent isEnglish={isEnglish}/>
    </>
  );
}

export default App;
