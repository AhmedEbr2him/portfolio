import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { toggleState } from '../utilities/toggleState';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(() => {
    return JSON.parse(sessionStorage.getItem('sidebarState')) || false;
  });

  const handleSidebar = () => {
    toggleState(isSidebarActive, setIsSidebarActive, 'sidebarState');
    sessionStorage.setItem('sidebarState', JSON.stringify(isSidebarActive));
  };

  /* FIRE STORED STATES */
  useEffect(() => {
    sessionStorage.setItem('sidebarState', JSON.stringify(isSidebarActive));
  }, [isSidebarActive]);
  return (
    <MainContext.Provider value={{ isSidebarActive, handleSidebar }}>
      {children}
    </MainContext.Provider>
  );
};
export { MainContext, MainProviderContext };

MainProviderContext.propTypes = {
  children: PropTypes.node,
};
