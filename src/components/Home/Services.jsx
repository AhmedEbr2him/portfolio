import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { mockData } from '../../constants/mockData';
import LinkBtn from '../Common/LinkBtn';
import { routeConstants } from '../../constants/routesConstants';

const Services = () => {
  return (
    <div className='services'>
      <div className='services-list'>
        {mockData.servicesData.map((item, index) => {
          const { link, title, paragraph } = item;

          return (
            <Link to={link} className='services-item' key={index} data-fadeup>
              <h4 className='service-head'>
                <span>{title}</span>
                <span className='icon'>
                  <Icon icon='fluent:arrow-right-32-filled' width='16' height='16' />
                </span>
              </h4>
              <p className='text'>{paragraph}</p>
            </Link>
          );
        })}
      </div>
      <div className='show-more' data-fadeup>
        <LinkBtn text={'Read more '} to={routeConstants.SERVICES} />
      </div>
    </div>
  );
};
export default Services;
