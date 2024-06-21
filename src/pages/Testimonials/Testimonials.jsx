import CommingSoon from '../../components/Common/CommingSoon';

const Testimonials = () => {
  return (
    <main className='testimonials-page'>
      <article className='setion' style={{ flex: 1, display: 'grid', placeContent: 'center' }}>
        <div className='container'>
          <CommingSoon />
        </div>
      </article>
    </main>
  );
};
export default Testimonials;
