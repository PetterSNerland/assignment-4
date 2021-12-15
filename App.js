
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
  import login from './components/login/login'
  import NotFound from './components/NotFound/NotFound'
import AppContainer from './hoc/AppContainer';

  function App() {
    return (
    <BrowserRouter>
    <AppContainer> <h1>My App</h1> 
    </AppContainer>

      <div className="App">
        <h1>My App</h1> 
        
         <Route path="/" exact component={ login } />
       
      
      
       </div>
    </BrowserRouter>
    );
  }

export default App;
