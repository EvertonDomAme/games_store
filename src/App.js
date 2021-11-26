import Home from './Pages/Home/Home';
import WishList from './Pages/WishList/WishList';
import Support from './Pages/Support/Support';
import SignIn from './Pages/SignIn/SignIn';
import Login from './Pages/Login/Login';
import AboutMe from './Pages/About/AboutMe';
import Profile from './Pages/Profile/Profile';
import {
  Routes,
  Route 
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import axios from 'axios';
import CardInfo from './Pages/CardInfo/CardInfo';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';



function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/wishlist' element={< WishList />} ></Route>
        <Route path='/support' element={< Support />} ></Route>
        <Route path='/sign-in' element={< SignIn />} ></Route>
        <Route path='/login' element={< Login />} ></Route>
        <Route path='/aboutDom' element={< AboutMe />} ></Route>
        <Route path='/profile' element={< Profile />} ></Route>
        <Route path='/game' element={< CardInfo />} ></Route>
      </Routes>
    <Footer />
    </>
    
    
  );
}

export default App;
