import { mockData } from '../../constants/mockData';

const Skills = () => {
  return (
    <div className='skills'>
      <ul className='skills-list'>
        {mockData.skillsData.map((item, index) => (
          <li className='skills-item' key={index} data-fadeup>
            {item.title}
          </li>
        ))}
      </ul>

      <div className='next-steps'>
        <h2 className='title'>enthusiast to</h2>
        <ul className='skills-list'>
          <li className='skills-item'>TypeScript</li>
          <li className='skills-item'>Next Js</li>
          <li className='skills-item'>Node Js</li>
          <li className='skills-item'>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
