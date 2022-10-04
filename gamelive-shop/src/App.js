import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';
import ItemDetail from './components/ItemDetail';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes} from 'react-router-dom'





function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='' element={<Clicker/>}/>
      <Route path='/shop' element={<ItemListContainer/>}/>
      <Route path={'shop/item/:id'} element={<ItemDetail/>}/>
      <Route path={'*'} element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
