import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/home';
import { ImgBan } from './components/HomeBan/homeBan';
import { ListContainer } from './Containers/ItemListContainer/itemListContainer';
import { CountContainer } from './Containers/CountContainer/countContainer';

//import { ItemListContainer } from './Containers/ItemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ImgBan/>
      <ListContainer greeting={'Bienvenido, te mostramos nuestros productos destacados'}/> 
      <CountContainer/>
      <CountContainer />
    
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
