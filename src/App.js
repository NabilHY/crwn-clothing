import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Categories from './components/categories/categories.component';
import { Shop } from './routes/shop/shop.component';
import RootLayout from './layouts/RootLayout.component';
import { Auth } from './routes/auth/Auth.component.jsx';
import { Checkout } from './routes/checkout/checkout.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index className="categories-container" element={<Categories />} />
      <Route path='shop/*' element={<Shop />} />
      <Route path='auth' element={<Auth />} />
      <Route path='checkout' element={<Checkout />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
