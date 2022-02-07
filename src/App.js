
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/Item-list-container/ItemListContainer';
import { ItemDetailContainer } from './components/Item-detail-container/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
      <ItemDetailContainer />
      
      
    </div>
  );
}

export default App;
