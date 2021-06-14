import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import history from './histore'
import './App.css';
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom';
import { useUserAuthentication } from './hooks/useUserAuthentication';
import Preloader from './pages/shared/preloader';
import { Suspense } from 'react';

function App() {
  
  const { loading, isLoggedIn } = useUserAuthentication();
  return (
    <>
      {
        loading ?
          (<Preloader />) :
          (
            isLoggedIn === false ?
              (<Suspense fallback={<Preloader />}>
                <Router history={history}>
                  <Route path="/login"  component={LoginPage} />
                  <Redirect to="/login"/>
                </Router>
              </Suspense>)
              :
              (<Suspense fallback={<Preloader />}>
                <Router history={history}>
                  <Route path="/"  component={HomePage} />
                </Router>
              </Suspense>)
          )
      }
    </>
  );
}

export default App;
