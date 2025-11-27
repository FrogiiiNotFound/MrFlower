import React from 'react';
import { Menu } from './Menu';
import { UserSettings } from './UserSettings';
import './Menu.scss';
import { Route, Routes } from 'react-router-dom';
import { Orders } from './Orders';

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
                <Route path="/profile/settings" element={<UserSettings />} />
                <Route path="/profile/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
