
import './App.css';
import AboutUs from './Components/AboutUs';
import Checking from './Components/Checking';
import ContactUs from './Components/ContactUs';
import Heading from './Components/Headings';
import Home from './Components/Home';
import Items from './Components/Items';
import LanguageSelector from './Components/LanguageSelector';
import Services from './Components/Services';


function   App() {
  return (
  <>
  
  <Heading/>
 

  <LanguageSelector/>
 
  <Home/>
  <Items/>

  <Services/>
  <AboutUs/>
  <ContactUs/>
<Checking/>

  </>
  );
}

export default App;
