import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <>
    <NavBar>
    </NavBar>
    <ItemListContainer nombre='Game-Live Shop' className='ItemListContainer'></ItemListContainer>

   </>
  );
}

export default App;
