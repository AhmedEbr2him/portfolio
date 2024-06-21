import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Cv, Home, Layout, Services, Testimonials, Work } from './pages';
import { routeConstants } from './constants/routesConstants';
import { MainProviderContext } from './context/MainContext';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: routeConstants.HOME,
      element: <Layout />,
      children: [
        {
          path: routeConstants.HOME,
          element: <Home />,
        },
        {
          path: routeConstants.ABOUT,
          element: <About />,
        },
        {
          path: routeConstants.WORK,
          element: <Work />,
        },
        {
          path: routeConstants.CV,
          element: <Cv />,
        },
        {
          path: routeConstants.CONTACT,
          element: <Contact />,
        },
        {
          path: routeConstants.SERVICES,
          element: <Services />,
        },
        {
          path: routeConstants.TESTIMONIALS,
          element: <Testimonials />,
        },
      ],
    },
  ]);
  return (
    <div className='app'>
      <MainProviderContext>
        <RouterProvider router={routes}>
          <Layout />
        </RouterProvider>
      </MainProviderContext>
    </div>
  );
};
export default App;
