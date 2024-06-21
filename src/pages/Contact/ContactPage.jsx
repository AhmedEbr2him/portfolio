import './contact.css';

import { LinkBtn, MainPageText, SectionTitle } from '../../components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { routeConstants } from '../../constants/routesConstants';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';

const ContactPage = () => {
  const socialList = [
    {
      icon: 'pajamas:twitter',
      label: 'X (Twitter)',
      link: '#',
      user_name: '@ahmedeb',
    },
    {
      icon: 'uit:facebook-f',
      label: 'Facebook',
      link: '#',
      user_name: '@ahmedeb',
    },
    {
      icon: 'logos:figma',
      label: 'Figma',
      link: '#',
      user_name: '@ahmedeb',
    },
    {
      icon: 'iconoir:github',
      label: 'Github',
      link: '#',
      user_name: '@ahmedeb',
    },
    {
      icon: 'devicon:behance',
      label: 'Behance',
      link: '#',
      user_name: '@ahmedeb',
    },
    {
      icon: 'icon-park-outline:dribble',
      label: 'Dribble',
      link: '#',
      user_name: '@ahmedeb',
    },
  ];
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <main className='main'>
      <section className='section'>
        <div className='container'>
          <div className='contact-layer'>
            <MainPageText
              title={'Contact'}
              description={
                'Dive into my portfolio of standout Front-end & UI/UX projects, showcasing myexpertise in creating intuitive, Front-end designs across various industries.'
              }
            />

            <section className='contact-layer'>
              <div className='contact-wrapper'>
                <SectionTitle
                  title={'Send me an email'}
                  paragraph={
                    "Interested in working together or have a question? Reach out to me! I'm always open to discussing new projects, collaborations, or any inquiries you might have."
                  }
                />
                <div className='contact'>
                  <div className='contact-form'>
                    <form className='form'>
                      <div className='form-list'>
                        <div className='form-item'>
                          <input
                            type='text'
                            name='user name'
                            className='form-control'
                            id='user__name'
                            placeholder='Name'
                            autoComplete='false'
                          />
                        </div>
                        <div className='form-item'>
                          <input
                            type='email'
                            name='user email'
                            className='form-control'
                            id='user__email'
                            placeholder='Email'
                            autoComplete='off'
                          />
                        </div>
                        <div className='form-item'>
                          <textarea
                            name='user message'
                            id='user__message'
                            placeholder='Message'
                          ></textarea>
                        </div>
                      </div>

                      <div className='submit-form'>
                        <button type='submit' aria-label='submit contact form'>
                          Send message
                        </button>
                      </div>
                    </form>
                    <LinkBtn text={'view more channels'} to={routeConstants.CONTACT} />
                  </div>
                </div>
              </div>
            </section>

            <section className='social-media-layer'>
              <SectionTitle
                title={'Social Media'}
                paragraph={
                  'Connect with me on social media and explore my work on various design marketplaces. Follow along for updates, inspiration, and more.'
                }
              />
              <ul className='social-list'>
                {socialList.map((item, index) => {
                  const { icon, label, link, user_name } = item;

                  return (
                    <li className='social-item' key={index}>
                      <Link to={link} className='social-link'>
                        <div className='icon'>
                          <Icon icon={icon} width='24' height='24' />
                        </div>
                        <div className='text-content'>
                          <span className='social-name'>
                            {label}
                            <Icon icon='lucide:external-link' width='18' height='18' />
                          </span>
                          <p>{user_name}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ContactPage;
