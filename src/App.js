import './App.css';
import FirstSection from './Components/FirstSection';
import Navbar from './Components/Navbar';
import SecondSection from './Components/SecondSection';

const App = () => {
  return (
    <div className='mx-16'>
      <Navbar/>
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
