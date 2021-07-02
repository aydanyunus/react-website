import './App.css';
import Home from './pages';
import SignInPage from './pages/signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
