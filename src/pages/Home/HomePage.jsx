import './home.css';
import {
  Contact,
  Experience,
  Faq,
  LinkBtn,
  Projects,
  SectionTitle,
  Services,
  Skills,
} from '../../components';
import Brief from '../../components/Home/Brief';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';
import { routeConstants } from '../../constants/routesConstants';

const HomePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <section className='section home-page'>
      <div className='container'>
        <div className='home-wrapper'>
          <div className='brief-wrapper'>
            <Brief />
          </div>

          <div className='projects-wrapper'>
            <SectionTitle title={'Featured Work'} />
            <div className='projects-layer'>
              <Projects />
              <div className='show-more'>
                <LinkBtn text={'View all work'} to={routeConstants.WORK} />
              </div>
            </div>
          </div>
          <div className='skills-wrapper'>
            <SectionTitle title={'Skills'} />
            <Skills />
          </div>

          <div className='services-wrapper'>
            <SectionTitle
              title={'Services'}
              paragraph={
                "Offering a range of UI/UX and Front-end design services, I'm here to help you solve your design challenges and create experiences your users will love."
              }
            />
            <Services />
          </div>

          <div className='experience-wrapper'>
            <SectionTitle
              title={'Curriculum Vitae'}
              paragraph={
                "A comprehensive look at my short journey, highlighting my experiences, skills, and the milestones I've achieved in the world of design."
              }
            />
            <Experience />
          </div>

          <div className='faq-wrapper'>
            <SectionTitle
              title={'FAQ'}
              paragraph={
                'Your questions answered: Learn more about my design process, services, and how we can collaborate to bring your vision to life'
              }
            />
            <Faq />
          </div>

          <Contact />
        </div>
      </div>
    </section>
  );
};
export default HomePage;
