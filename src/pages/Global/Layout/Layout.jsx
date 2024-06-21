import { Outlet } from 'react-router-dom';
import { Footer, Header, MobileBottomMenu } from '../../index';
import { Progress, Sidebar } from '../../../components';

const Layout = () => {
  return (
    <main className='main'>
      <Header />
      <Outlet />
      <MobileBottomMenu />
      <Footer />
      <Sidebar />
      <Progress />
    </main>
  );
};
export default Layout;
