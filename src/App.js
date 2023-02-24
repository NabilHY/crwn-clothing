import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Categories from './components/categories/categories.component';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index className="categories-container" element={<Categories />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
