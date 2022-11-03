import './app.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'videos', element: <Videos /> },
    ],
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
