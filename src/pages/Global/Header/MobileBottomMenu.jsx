import { Link, useLocation } from 'react-router-dom';
import { routeConstants } from '../../../constants/routesConstants';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useIsScroll } from '../../../hooks/useIsScroll';
import { useThemeSwitch } from '../../../hooks/useThemeSwitch';
import React from 'react';

const MobileBottomMenu = () => {
  const { isScroll } = useIsScroll();
  const { changeTheme } = useThemeSwitch();
  const MemoIcon = React.memo(Icon);
  const location = useLocation();
  const mobileMenuList = [
    {
      link: routeConstants.HOME,
      label: 'Home',
      icon: 'fluent:home-32-regular',
    },
    {
      link: routeConstants.WORK,
      label: 'Work',
      icon: 'carbon:idea',
    },
    {
      link: routeConstants.SERVICES,
      label: 'Services',
      icon: 'mdi:folders-outline',
    },
    {
      link: routeConstants.TESTIMONIALS,
      label: 'Testimonials',
      icon: 'lucide:heart',
    },
  ];
  return (
    <div className={`mobile-bottom-menu ${isScroll ? '' : 'active'}`}>
      <div className='mobile-menu-wrapper'>
        <div className='theme-switch'>
          <div className='tooltip'>
            <span>Change Theme</span>
          </div>
          <button
            className='btn toggle-icon'
            onClick={changeTheme}
            aria-label={'theme switch button'}
          >
            <MemoIcon
              icon='line-md:sunny-outline-loop'
              width='24'
              height='24'
              className='light-icon'
            />
            <MemoIcon
              icon='line-md:sunny-outline-to-moon-loop-transition'
              width='24'
              height='24'
              className='dark-icon'
            />
          </button>
        </div>
        <ul className='mobile-menu-list'>
          {mobileMenuList.map((item, index) => {
            const { link, label, icon } = item;

            return (
              <li key={index} className={`list-item ${location.pathname === link ? 'active' : ''}`}>
                <div className='tooltip'>
                  <span>{label}</span>
                </div>
                <Link to={link} aria-labelledby={`${label} link`}>
                  <button className='btn' aria-label={`${label} button`}>
                    <Icon icon={icon} width='24' height='24' />
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default MobileBottomMenu;
