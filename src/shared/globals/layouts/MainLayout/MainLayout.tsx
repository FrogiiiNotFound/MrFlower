import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};