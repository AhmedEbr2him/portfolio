import './about.css';
import { Contact } from '../../components';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';

const AboutPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <main className='about-page'>
      <div className='about-wrapper'>
        <section className='section'>
          <div className='container'>
            <div className='about-brief'>
              <div className='title'>
                <h3>Hey I&apos;m Ahmed Ebrahim.</h3>
                <p style={{ animationDelay: '0.5s' }}>
                  <span>
                    A passionate Designer and Front-end Developer based in Egypt. I specialize in
                    creating visually captivating interfaces and elevating user experiences. With a
                    journey that bridges structured design environments and the dynamic realm of
                    freelancing, my diverse portfolio showcases the fusion of creativity and
                    functionality.
                  </span>
                  <br />

                  <span>
                    I am fueled by a passion for transforming ideas into seamless, user-centric
                    experiences. Armed with a keen eye for detail and an insatiable curiosity, I
                    navigate the intersection of aesthetics and functionality to craft products that
                    not only meet user needs but exceed expectations.
                  </span>
                  <br />

                  <span>
                    My journey in design is characterized by a commitment to thoughtful
                    problem-solving and a love for pushing the boundaries of creativity. I thrive in
                    collaborative environments, finding inspiration in the synergy of diverse
                    perspectives within a team. Small details matter to me, and I approach every
                    project with an acute awareness of how the user interacts with and derives value
                    from the final product.
                  </span>
                </p>
              </div>
            </div>

            <div className='about-contact'>
              <div className='title'>
                <h1 style={{ animationDelay: '1s' }}>Have a project</h1>
              </div>
              <div className='desc'>
                <p style={{ animationDelay: '1.5s' }}>
                  Let my expertise as a seasoned product designer transform your ideas into standout
                  designs. I specialize in bringing innovation and functionality to the table,
                  ensuring your project surpasses expectations.
                </p>
              </div>
            </div>

            <Contact />
          </div>
        </section>
      </div>
    </main>
  );
};
export default AboutPage;
