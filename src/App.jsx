// Importations of hooks
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importations of components & pages
import Layout from './assets/Components/Layout';
import Header from './assets/Components/Header'
import './App.css'

// Routes definitions
const router = createBrowserRouter([
  {
    path: '/', element: <Layout/>
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
