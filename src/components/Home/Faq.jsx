import { Icon } from '@iconify/react/dist/iconify.js';
import { mockData } from '../../constants/mockData';
import { useState } from 'react';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenAccordion = index => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className='faq'>
      <div className='faq-list'>
        {mockData.faqData.map((item, index) => {
          const { title, desc } = item;

          return (
            <div className='faq-item' key={index} data-fadeup>
              <div className='faq-title'>
                <h3>{title}</h3>
                <button
                  className='icon'
                  aria-pressed={isOpen === index ? true : false}
                  aria-label='open accordion button'
                  onClick={() => handleOpenAccordion(index)}
                >
                  <Icon icon='heroicons:plus-solid' width='24' height='24' />
                </button>
              </div>
              <div className='faq-desc' open={isOpen === index ? 'ture' : null}>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Faq;
