// Importations of hooks
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importations of components & pages
import Layout from './assets/Components/Layout';
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
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
