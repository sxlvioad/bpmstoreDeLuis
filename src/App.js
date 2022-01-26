
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/Item-list-container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
