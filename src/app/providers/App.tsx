import { Cart } from '@pages/cart';
import { Main } from '@pages/Main/ui/Main';
import { Profile } from '@pages/profile/ui';
import { Search } from '@pages/search';
import MainLayout from '@shared/globals/layouts/MainLayout/MainLayout';
import '@shared/globals/main.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/*" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
