import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import EvenementPage from './pages/EvenementPage'
import ContratPage from './pages/ContratPage'
import DepartmentPage from './pages/DepartmentPage'
import PostePage from './pages/PostePage'
import DocumentPage from './pages/DocumentPage'
import history from './histore'
import './App.css';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router history={history}>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Router>
    </>
  );
}

export default App;
