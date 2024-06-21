import PropTypes from 'prop-types';

const MainPageText = ({ title, description }) => {
  return (
    <section className='main-page-text'>
      <h2 className='title'>{title}</h2>
      <p className='desc'>{description}</p>
    </section>
  );
};
export default MainPageText;

MainPageText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
