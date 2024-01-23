
import 'swiper/css';
import './css/App.css';
import './css/reset.css';
import './css/base.css';
import './css/vars.css';


import { Home } from './containers/Home/home';
import { Products } from './containers/Products/products';

function App() {
  return (
    <div className="App">
      <Home/>
      <Products/>
    </div>
  );
}

export default App;
