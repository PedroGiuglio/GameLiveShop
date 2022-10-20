import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';
import ItemDetail from './components/ItemDetail';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { FavProvider } from './components/context/AddContext';
import CartList from './components/CartList';





function App() {

  return (
    <>
    <FavProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>  
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path={'/item/:id'} element={<ItemDetail/>}/>
      <Route path={'/cart'} element={<CartList/>}/>
      <Route path='' element={<Clicker/>}/>
      <Route path={'*'} element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    </FavProvider>
   </>
  );
}

export default App;
