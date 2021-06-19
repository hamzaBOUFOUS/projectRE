import Authenticated from './Authenticated'
import Unauthenticated from './Unauthenticated'
import './App.css';
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
                <Unauthenticated />
              </Suspense>)
              :
              (<Suspense fallback={<Preloader />}>
                <Authenticated />
              </Suspense>)
          )
      }
    </>
  );
}

export default App;
