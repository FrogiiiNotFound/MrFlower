import React from 'react';
import { Menu } from './Menu';
import { UserSettings } from './UserSettings';
import './Menu.scss';

export const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="profile__container _container">
          <h2 className="profile__title">Профиль</h2>
          <div className="profile__content">
            <Menu />
            <div className="profile__info-wrapper">
              <UserSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
