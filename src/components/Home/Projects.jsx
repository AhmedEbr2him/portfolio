import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GetTime } from '../';
import { mockData } from '../../constants/mockData';

const Projects = ({ from, to }) => {
  return (
    <div className='projects-list'>
      {mockData.proejctData.slice(from, to).map((item, index) => {
        const { link, imageLight, imageDark, alt, title, tech, time } = item;

        return (
          <div className='project' key={index} data-fadeup>
            <Link to={link}>
              <figure className='project-media'>
                <img
                  src={imageLight}
                  alt={alt}
                  loading='lazy'
                  className='object-cover image-light'
                  width='150'
                  height='150'
                />
                <img
                  src={imageDark}
                  alt={alt}
                  loading='lazy'
                  className='object-cover image-dark'
                  width='150'
                  height='150'
                />
              </figure>
              <div className='text-contain'>
                <h2 className='title'>{title}.</h2>
                <p className='type'>{tech}</p>
                <div className='time-value'>
                  <GetTime targetTime={time} />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Projects;

Projects.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
};
