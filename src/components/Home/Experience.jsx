import { Link } from 'react-router-dom';
import { mockData } from '../../constants/mockData';
import LinkBtn from '../Common/LinkBtn';
import { Icon } from '@iconify/react/dist/iconify.js';
import My_CV from '../../../public/CV.pdf';
import { routeConstants } from '../../constants/routesConstants';

const Experience = () => {
  return (
    <div className='experience-list'>
      {mockData.experienceData.map((item, index) => {
        const { job, time, title, desc } = item;

        return (
          <Link className='experience-item' key={index} data-fadeup>
            <div className='first-part'>
              <h3 className='title'>{job}</h3>
              <p className='desc'>{time}</p>
            </div>
            <div className='second-part'>
              <h3 className='title'>{title}</h3>
              <p className='desc'>{desc}</p>
            </div>
          </Link>
        );
      })}
      <div className='show-more'>
        <div className='link-btn' data-fadeup>
          <LinkBtn text={'Read more '} to={routeConstants.CV} />
        </div>
        <div className='link-btn' data-fadeup>
          <Link to='#' download={My_CV}>
            <span className='text'>Download CV</span>
            <span className='icon'>
              <Icon icon='tabler:download' width='18' height='18' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Experience;
