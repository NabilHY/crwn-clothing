import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Categories from './components/categories/categories.component';
import './App.css';
import { Shop } from './routes/shop.component';
import RootLayout from './layouts/rootLayout.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index className="categories-container" element={<Categories />} />
      <Route path='shop' element={<Shop />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
