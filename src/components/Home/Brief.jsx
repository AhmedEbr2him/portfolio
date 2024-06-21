import { Link } from 'react-router-dom';
import LinkBtn from '../Common/LinkBtn';
import { Icon } from '@iconify/react/dist/iconify.js';
import My_CV from '../../../public/CV.pdf';
import { routeConstants } from '../../constants/routesConstants';

const Brief = () => {
  return (
    <div className='brief'>
      <div className='descripe-text' data-fadeup>
        <p className='first-text'>
          Hello, I&apos;m Ahmed Ebrahim, a passionate <span>Front-end Developer</span>
          &nbsp;and&nbsp;
          <span>Designer</span>&nbsp; based in Egypt. I specialize in creating &nbsp;
          <span>front-end visually captivating</span> and <span>elevating user experiences</span>.
          With a journey that bridges structured design environments and the dynamic realm of
          freelancing, my diverse portfolio showcases the fusion of creativity and functionality.
        </p>
      </div>

      <div className='links'>
        <div className='link-btn' data-fadeup>
          <LinkBtn text={'View all work'} to={routeConstants.WORK} />
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
export default Brief;
