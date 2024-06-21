import PropTypes from 'prop-types';
const SectionTitle = ({ title, paragraph }) => {
  return (
    <div className='section-title'>
      <h2>
        <span className='title'>{title}</span> <span className='line'></span>
      </h2>
      {paragraph && <p>{paragraph}</p>}
    </div>
  );
};
export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};
