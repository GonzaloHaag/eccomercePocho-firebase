import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Footer from './componentes/Footer';
import Checkout from './componentes/Checkout';


function App() {
  return (
    <div className='app-container'>
      <CartProvider>
      <BrowserRouter>
      <Header /> {/*Dentro estara el navbarmobile*/}
     
      <Routes>
       <Route path='/' element = {<Home />} />
       <Route path='/productos' element = {<ItemListContainer />} />
       <Route path='/productos/:categoria' element = {<ItemListContainer />} />
       <Route path='/item/:id' element = {<ItemDetailContainer />} />
       <Route path='/checkout' element = {<Checkout />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
