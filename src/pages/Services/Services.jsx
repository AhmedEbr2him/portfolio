import './services.css';
import { useEffect, useRef } from 'react';

import { scrollToTop } from '../../utilities/scrollToTop';
import { Contact, MainPageText, SectionTitle } from '../../components';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { mockData } from '../../constants/mockData';

const Services = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const eleRef = useRef(null);
  const handleScroll = id => {
    eleRef.current = document.getElementById(id);

    if (eleRef.current) {
      eleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className='services-page'>
      <article className='section'>
        <div className='container'>
          <MainPageText
            title={'Services'}
            description={
              'Offering a range of UI/UX design services, Im here to help you solve your design challenges and create experiences your users will love.'
            }
          />
          <div className='services-wrapper'>
            <section className='services-layer'>
              <div className='glossary'>
                <SectionTitle title={'Glossary'} />

                <ul className='glossary-list'>
                  <li className='glossary-item'>
                    <Icon icon='iconamoon:arrow-right-2-duotone' width='18' height='18' />
                    <Link to='#web_design' onClick={() => handleScroll('web_design')}>
                      Web Desing
                    </Link>
                  </li>
                  <li className='glossary-item'>
                    <Icon icon='iconamoon:arrow-right-2-duotone' width='18' height='18' />
                    <Link to='#ui_ux' onClick={() => handleScroll('ui_ux')}>
                      UI/UX
                    </Link>
                  </li>
                  <li className='glossary-item'>
                    <Icon icon='iconamoon:arrow-right-2-duotone' width='18' height='18' />
                    <Link to='#logo_design' onClick={() => handleScroll('logo_design')}>
                      Logo Desgin
                    </Link>
                  </li>
                  <li className='glossary-item'>
                    <Icon icon='iconamoon:arrow-right-2-duotone' width='18' height='18' />
                    <Link to='#branding' onClick={() => handleScroll('branding')}>
                      Branding
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            <section className='services-content'>
              <div className='services-list'>
                {mockData.servicesData.map((item, index) => {
                  const { id, link, title, paragraph } = item;

                  return (
                    <Link to={link} key={index} className='services-item' id={id} data-fadeup>
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
            </section>
          </div>
          <section className='contact'>
            <Contact />
          </section>
        </div>
      </article>
    </main>
  );
};
export default Services;
