import './cv.css';
import { Link } from 'react-router-dom';
import { Contact, SectionTitle } from '../../components';
import { Icon } from '@iconify/react/dist/iconify.js';
import { mockData } from '../../constants/mockData';
import { useEffect, useRef } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';
import My_CV from '../../../public/CV.pdf';
const CvPage = () => {
  const eleRef = useRef(null);

  const handleScroll = id => {
    eleRef.current = document.getElementById(id);

    if (eleRef.current) {
      eleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <main className='cv-page'>
      <article className='section'>
        <div className='container'>
          <section className='main-page-text'>
            <h2 className='title' data-fadeup>
              Curriculum Vitae
            </h2>
            <p className='desc' data-fadeup>
              A comprehensive look at my professional journey, highlighting my experiences, skills,
              and the milestones I&apos;ve achieved in the world of design.
            </p>

            <div className='link-btn' data-fadeup>
              <Link to={''} download={My_CV}>
                <span className='text'>Download CV</span>
                <span className='icon'>
                  <Icon icon='tabler:download' width='18' height='18' />
                </span>
              </Link>
            </div>
          </section>

          <section className='experience'>
            <div className='glossary'>
              <SectionTitle title={'Glossary'} />

              <ul className='glossary-list'>
                <li className='glossary-item'>
                  <Icon icon='iconamoon:arrow-right-2-duotone' width='18' height='18' />
                  <Link to='#front_end' onClick={() => handleScroll('front_end')}>
                    Front End Developer
                  </Link>
                </li>
                <li className='glossary-item'>
                  <Icon icon='iconamoon:arrow-right-2-duotone' width='18' height='18' />
                  <Link to='#graphic_design' onClick={() => handleScroll('graphic_design')}>
                    Graphic Designer
                  </Link>
                </li>
              </ul>
            </div>

            <div className='experience-content'>
              <div className='content-list'>
                {mockData.experienceData.map((item, index) => {
                  const { id, job, time, title, desc } = item;

                  return (
                    <Link className='experience-item' key={index} id={id} data-fadeup>
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
              </div>
            </div>
          </section>
          <Contact />
        </div>
      </article>
    </main>
  );
};
export default CvPage;
