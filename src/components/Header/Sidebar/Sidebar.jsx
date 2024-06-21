import './sidebar.css';
import { Link } from 'react-router-dom';
import { Images } from '../../../assets/images/Images';
import { routeConstants } from '../../../constants/routesConstants';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../../context/MainContext';
import { useThemeSwitch } from '../../../hooks/useThemeSwitch';
import { useStopDocScroll } from '../../../hooks/useStopDocScroll';

const Sidebar = () => {
  const { isSidebarActive, handleSidebar } = useContext(MainContext);
  const { changeTheme } = useThemeSwitch();
  const MemoIcon = React.memo(Icon);
  const { stopScroll, startScroll } = useStopDocScroll();

  useEffect(() => {
    if (isSidebarActive) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isSidebarActive, stopScroll, startScroll]);

  return (
    <>
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
        <nav className='sidebar-nav'>
          <div className='sidebar-list'>
            <div className='sidebar-top'>
              <div className='top-wrapper'>
                <div className='avatar-small'>
                  <img
                    src={Images.HeaderImages.avatart}
                    alt='avatar image'
                    className='object-contain'
                  />
                </div>

                <div className='text-content'>
                  <Link to={routeConstants.HOME} className='menu-link'>
                    <p className='name'>Ahmed Ebrahim</p>
                    <p className='position'>Designer & Front-end Developer</p>
                  </Link>
                </div>
              </div>
            </div>
            <ul className='menu'>
              <li className='menu-item' onClick={handleSidebar}>
                <Link to={routeConstants.HOME} className='menu-link'>
                  <span className='icon'>
                    <Icon icon='fluent:home-32-regular' width='24' height='24' />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li className='menu-item' onClick={handleSidebar}>
                <Link to={routeConstants.ABOUT} className='menu-link'>
                  <span className='icon'>
                    <Icon icon='mdi:hand-wave-outline' width='24' height='24' />
                  </span>
                  <span>About</span>
                </Link>
              </li>
              <li className='menu-item' onClick={handleSidebar}>
                <Link to={routeConstants.CONTACT} className='menu-link'>
                  <span className='icon'>
                    <Icon icon='mage:message-dots' width='24' height='24' />
                  </span>
                  <span>Contact</span>
                </Link>
              </li>
              <li className='menu-item' onClick={handleSidebar}>
                <Link to={routeConstants.CV} className='menu-link'>
                  <span className='icon'>
                    <Icon icon='pepicons-pencil:cv' width='24' height='24' />
                  </span>
                  <span>CV</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className='theme-switch'>
            <button
              type='button'
              className='switch-btn'
              onClick={changeTheme}
              aria-label={'theme switch button'}
            >
              <span className='icon'>
                <MemoIcon
                  icon='line-md:sunny-outline-loop'
                  width='24'
                  height='24'
                  className='light-icon'
                />
              </span>
              <span className='icon'>
                <MemoIcon
                  icon='line-md:sunny-outline-to-moon-loop-transition'
                  width='24'
                  height='24'
                  className='dark-icon'
                />
              </span>
            </button>
          </div>
          <div className='social-links'>
            <h2 className='findme'>Find me at:</h2>
            <ul className='social-list'>
              <li className='social-item'>
                <div className='tooltip'>X</div>
                <Link to='#' aria-label={'X'}>
                  <Icon icon='hugeicons:new-twitter' width='18' height='18' />
                </Link>
              </li>
              <li className='social-item'>
                <div className='tooltip'>Dribble</div>
                <Link to='#' aria-label={'Dribble'}>
                  <Icon icon='icon-park-outline:dribble' width='18' height='18' />
                </Link>
              </li>
              <li className='social-item'>
                <div className='tooltip'>Github</div>
                <Link to='#' aria-label={'Github'}>
                  <Icon icon='iconoir:github' width='18' height='18' />
                </Link>
              </li>
              <li className='social-item'>
                <div className='tooltip'>Facebook</div>
                <Link to='#' aria-label={'Facebook'}>
                  <Icon icon='hugeicons:facebook-02' width='18' height='18' />
                </Link>
              </li>
              <li className='social-item'>
                <div className='tooltip'>Figma</div>
                <Link to='#' aria-label={'Figma'}>
                  <Icon icon='ph:figma-logo-light' width='18' height='18' />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={`scrim ${isSidebarActive ? 'active' : ''}`} onClick={handleSidebar}></div>
    </>
  );
};
export default Sidebar;
