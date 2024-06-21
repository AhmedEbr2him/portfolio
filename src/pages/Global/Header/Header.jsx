import './header.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Images } from '../../../assets/images/Images';
import { Link, useLocation } from 'react-router-dom';
import { routeConstants } from '../../../constants/routesConstants';
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import { useIsScroll } from '../../../hooks/useIsScroll';

const Header = () => {
  const location = useLocation();

  const navbarList = [
    {
      link: routeConstants.HOME,
      label: 'Home',
    },
    {
      link: routeConstants.ABOUT,
      label: 'About',
    },
    {
      link: routeConstants.CONTACT,
      label: 'Contact',
    },
    {
      link: routeConstants.CV,
      label: 'CV',
    },
  ];
  const { handleSidebar } = useContext(MainContext);
  const { isScroll } = useIsScroll();
  return (
    <header className={`header ${isScroll ? 'active' : ''}`}>
      <div className='header-wrapper'>
        <div className='left-content'>
          <div className='avatar-small'>
            <Link to={routeConstants.HOME} className='object-contain'>
              <img
                src={Images.HeaderImages.avatart}
                alt='avatar image'
                className='object-contain'
              />
            </Link>
          </div>

          <div className='text-content'>
            <Link to={routeConstants.HOME}>
              <p className='name'>Ahmed Ebrahim</p>
              <p className='position'>Front-End Developer & Designer </p>
            </Link>
          </div>
        </div>
        <div className='center-content'>
          <nav className='navbar'>
            <ul className='menu-list'>
              {navbarList.map((item, index) => (
                <li
                  className={`menu-item ${location.pathname === item.link ? 'active' : ''}`}
                  key={index}
                >
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='right-content'>
          <div className='icon' onClick={handleSidebar}>
            <button className='icon-btn toggle-btn' aria-label='toggle menu button'>
              <Icon icon='tabler:menu-2' width='30' height='30' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
