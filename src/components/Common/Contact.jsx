import { Link } from 'react-router-dom';
import { routeConstants } from '../../constants/routesConstants';
import LinkBtn from './LinkBtn';
import SectionTitle from './SectionTitle';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_message', 'template_kj8lwa6', formRef.current, 'KO5xCF8ny_k9ZL0R7')
      .then(
        response => {
          alert('SUCCESS! Your email has been sent.');
          console.log('SUCCESS!', response.status, response.text);
        },
        error => {
          alert('FAILED... Please try again.');
          console.log('FAILED...', error);
        }
      );
    e.target.reset();
  };

  return (
    <div className='contact-wrapper'>
      <SectionTitle
        title={'Contact'}
        paragraph={
          "Interested in working together or have a question? Reach out to me! I'm always open to discussing new projects, collaborations, or any inquiries you might have."
        }
      />
      <div className='contact'>
        <div className='contact-form'>
          <form className='form' ref={formRef}>
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
                <textarea name='user message' id='user__message' placeholder='Message'></textarea>
              </div>
            </div>

            <div className='submit-form'>
              <Link
                to={''}
                type='submit'
                aria-label='submit contact form'
                onClick={e => sendEmail(e)}
              >
                Send message
              </Link>
            </div>
          </form>
          <LinkBtn text={'view more channels'} to={routeConstants.CONTACT} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
