import { Cart } from '@pages/cart';
import { Favourites } from '@pages/favourites';
import { Home } from '@pages/main';
import { Notifications } from '@pages/notifications';
import { Orders } from '@pages/orders';
import { Search } from '@pages/search';
import { Settings } from '@pages/settings';
import { MainLayout } from '../layouts/main-layout/ui/MainLayout';
import '@shared/globals/main.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
}

export default App;
