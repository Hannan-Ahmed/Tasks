import './Components/Styling.css';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Content/Users';
import Price from './Components/PriceTable/Price';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='Center_title'>
        More signle, less noise
      </div>
      <Price />
      <Users />
    </div>
  );
}

export default App;
