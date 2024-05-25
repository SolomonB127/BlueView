// Importations of hooks
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// importations of components & pages
import Loader from './assets/Components/Loader';
const Layout = lazy(() => import('./assets/Components/Layout'));
import Home from './assets/Components/Pages/Home';
import './App.css'

// Routes definitions
const router = createBrowserRouter([
  {
    path: '/', element: <Layout/>,children:[
      {
        index:true, element: <Home />
      }
    ]
  }
])
function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router}/>
      </Suspense>
    </div>
  )
}

export default App
