import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <p className='copyrights'>&copy; Ahmed Ebrahim. All Rights Reserved 2024. </p>

        <ul className='links-menu'>
          <li className='link-item'>
            <Link to='#'>Twitter</Link>
          </li>
          <li className='link-item'>
            <Link to='#'>Dribble</Link>
          </li>
          <li className='link-item'>
            <Link to='#'>Github</Link>
          </li>
          <li className='link-item'>
            <Link to='#'>Facebook</Link>
          </li>
          <li className='link-item'>
            <Link to='#'>Figma</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
