import { Menu } from '@widgets/menu/ui/Menu';
import { Route, Routes } from 'react-router-dom';
import { Orders } from '../../Orders/ui/Orders';
import { Notifications } from '../../notifications/ui/Notifications';
import { Favourites } from '../../Favourites/ui/Favourites';

export const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="profile__container _container">
          <h2 className="profile__title">Профиль</h2>
          <div className="profile__content">
            <Menu />
            <div className="profile__info-wrapper">
              <Routes>
                <Route path="/profile/orders" element={<Orders />} />
                <Route path="/profile/notifications" element={<Notifications />} />
                <Route path="/profile/favourites" element={<Favourites />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
