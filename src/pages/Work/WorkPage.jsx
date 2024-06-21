import './work.css';
import { Link } from 'react-router-dom';
import { mockData } from '../../constants/mockData';
import { Contact, GetTime } from '../../components';

import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';
const WorkPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <main className='work-page'>
      <section className='section'>
        <div className='work-wrapper'>
          <div className='container'>
            <div className='work-layer'>
              <div className='main-page-text'>
                <h2 className='title' data-fadeup>
                  Work
                </h2>
                <p className='desc' data-fadeup>
                  Dive into my portfolio of standout Front-end & UI/UX projects, showcasing my
                  expertise in creating intuitive, Front-end designs across various industries.
                </p>
              </div>
              <div className='projects-list'>
                {mockData.proejctData.map((item, index) => {
                  const { imageLight, imageDark, link, alt, title, tech, time } = item;

                  return (
                    <div className='project' key={index} data-fadeup>
                      <Link to={link}>
                        <figure className='project-media'>
                          <img
                            src={imageLight}
                            alt={alt}
                            loading='lazy'
                            className='object-cover image-light'
                          />
                          <img
                            src={imageDark}
                            alt={alt}
                            loading='lazy'
                            className='object-cover image-dark'
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
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default WorkPage;
