import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage';
import ResponsiveAppBar from './components/Header/Navbar';

function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <HomePage/>
    </>
  );
}

export default App;
