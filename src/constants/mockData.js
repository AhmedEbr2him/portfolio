import { Images } from '../assets/images/Images';

const time = new Date().getFullYear();
const proejctData = [
  {
    link: 'https://cook-io-with-react-app.vercel.app',
    imageLight: Images.ProjectImages.cookieLight,
    imageDark: Images.ProjectImages.cookirDark,
    alt: 'cookie project media',
    title: 'cookie.io recipe web application',
    tech: 'Reatch Js, API',
    time: '2023-6-24',
  },
  {
    link: 'https://booksearch-xi.vercel.app',
    imageLight: Images.ProjectImages.bookLight,
    imageDark: Images.ProjectImages.bookDark,
    alt: 'Book search project media',
    title: 'TvFlix movie search web application',
    tech: 'Reatch Js, API',
    time: '2023-10-24',
  },
  {
    link: 'https://react-tvflix.vercel.app',
    imageLight: Images.ProjectImages.tvFlixLight,
    imageDark: Images.ProjectImages.tvFlixDark,
    alt: 'TvFlix project media',
    title: 'Bookhub book search web application',
    tech: 'Reatch Js, API',
    time: '2023-07-24',
  },
  {
    link: 'https://voxo-ecommerce-app.vercel.app',
    imageLight: Images.ProjectImages.voxoLight,
    imageDark: Images.ProjectImages.voxoDark,
    alt: 'Voxo ecommerce project',
    title: 'Voxo Ecommerce web application',
    tech: 'Reatch Js',
    time: '2023-12-24',
  },
  {
    link: 'https://pixstock-react-js.vercel.app/',
    imageLight: Images.ProjectImages.pixstockLight,
    imageDark: Images.ProjectImages.pixStockDark,
    alt: 'PixStock a large stock library',
    title: 'PixStock images web application',
    tech: 'Reatch Js, API, Pexels API',
    time: '2024-7-01',
  },
];
const servicesData = [
  {
    id: 'web_design',
    link: '#',
    title: 'Web Design',
    paragraph:
      'Web design is the art and science of creating visually appealing and user-friendly websites. Freelance web designers specialize in designing the layout, user interface (UI), and overall user experience (UX) of websites. They use tools like Adobe XD,  and Figma to craft designs that not only look great but also function seamlessly across different devices and browsers. A freelance web designer collaborates closely with clients to understand their business goals, target audience, and brand identity.  They translate these insights into website designs that reflect the client&apos;s  vision. This includes creating wireframes, mockups, and prototypes to visualize the site&apos;s structure and functionality. Effective web design involves considerations like responsive design for mobile devices, intuitive navigation, and optimization for fast loading times. Web designers often work hand-in-hand with web developers to turn  their designs into fully functional websites. Ultimately, freelance web designers play a crucial role in helping businesses establish a strong online presence, drive user  engagement, and achieve their digital objectives. Their expertise extends to creating visually appealing websites that leave a positive impression on visitors while ensuring a seamless and enjoyable browsing experience.',
  },
  {
    id: 'ui_ux',
    link: '#',
    title: 'UI/UX',
    paragraph:
      'UI/UX (User Interface/User Experience) design is a multidisciplinary field focused on creating user-friendly and visually appealing digital interfaces. Freelance UI/UX designers specialize in designing websites, mobile apps, and software applications that provide a seamless and enjoyable user experience. These designers work closely with clients to understand user needs and business goals. They create wireframes, prototypes, and interactive designs that prioritize usability, accessibility, and visual aesthetics. UI/UX designers aim to strike a balance between functionality and aesthetics, ensuring that digital products are both user-friendly and visually engaging. UI/UX design involves considerations such as intuitive navigation, responsive design for various devices, and accessibility for all users. Freelance UI/UX designers collaborate with developers and conduct user testing to refine and optimize designs based on feedback.Effective UI/UX design is crucial for retaining users, reducing bounce rates, and achieving business objectives. Freelance UI/UX designers play a vital role in creating digital experiences that keep users engaged, satisfied, and coming back for more.',
  },
  {
    id: 'logo_design',
    link: '#',
    title: 'Logo Design',
    paragraph:
      'Logo design is a crucial service for businesses and individuals looking to establish a strong visual identity. A well-crafted logo is the face of a brand, making it memorable and recognizable. Freelance designers specializing in logo design use their creative skills to craft unique and meaningful logos that convey the essence of a brand or entity. They work closely with clients to understand their values, goals, and target audience to ensure the logo aligns with the brand&apos;s identity. Whether it&apos;s a minimalist, modern logo or an intricate and illustrative one, logo designers use software like Adobe Illustrator to bring their concepts to life. They consider color psychology, typography, and visual elements to create a logo that communicates professionalism, trustworthiness, and uniqueness. Successful logo designers not only create aesthetically pleasing designs but also ensure that the logo is versatile, scalable, and works well in various contexts. They provide clients with logo files in different formats for use in print, digital media, and promotional materials, ensuring consistency across all brand touchpoints. Ultimately, logo design is about distilling a brand&apos;s essence into a simple, impactful visual symbol that leaves a lasting impression on customers.',
  },
  {
    id: 'branding',
    link: '#',
    title: 'Branding',
    paragraph:
      'Branding is the process of creating a unique and consistent visual and emotional identity for a business or individual. Freelance branding designers specialize in developing brand identities that resonate with the target audience and differentiate the brand in the market. These designers work closely with clients to define their brand&apos;s values, personality, and mission. They then create visual elements such as logos, color schemes, typography choices, and brand guidelines that encapsulate these attributes. The goal is to ensure that every piece of branding material, from business cards to websites, conveys a cohesive and memorable brand image. Freelance branding designers understand the importance of consistency in branding. They provide clients with detailed brand guidelines that outline how the brand elements should be used across various media and contexts. This helps maintain a uniform and recognizable brand identity. Effective branding design has a profound impact on customer perception, trust, and loyalty. Freelance designers in this field play a pivotal role in helping businesses establish and maintain a strong, enduring brand presence in the market.',
  },
];
const experienceData = [
  {
    id: 'front_end',
    job: 'Front-end Developer',
    time: `1 year (2023-${time})`,
    title: 'Freelancer Front-end Developer on Upwork',
    desc: 'I can assist you in realizing your digital vision, whether you require continuous front-end development support, a whole website makeover, or a stylish landing page. Together, let&apos;s create something incredible. I think that design may be powerful when it is elegant and simple. My strategy emphasizes on clear, manageable code and user-friendly interfaces, with the goal of producing visually stunning, highly functional, and user-centric online experiences.',
  },
  {
    id: 'graphic_design',
    job: 'Graphic Design',
    time: '2 years (2020-2022)',
    title: 'Freelancer graphic design on Upwork',
    desc: 'Great design, in my opinion, is about creating an experience rather than just being beautiful. My method blends strategic thinking with creative flair to make sure every design not only looks excellent but also accomplishes its goal.',
  },
];

const faqData = [
  {
    title: 'Can you work with our existing development team?',
    desc: "Absolutely! I have extensive experience collaborating with development teams of various sizes. I'm comfortable integrating into existing workflows, using tools like Slack, Jira, and GitHub to ensure smooth communication and project management.",
  },
  {
    title: 'What is your design process?',
    desc: "My design process is front-end design, starting with understanding the user's needs through research. This informs the design phase, where I create wireframes and prototypes. After testing and feedback, I refine the design to its final form, always prioritizing usability and aesthetics.",
  },
  {
    title: 'Whats your approach to user research?',
    desc: 'My user research approach involves a mix of quantitative and qualitative methods, including surveys, interviews, usability testing, and analytics review. This ensures a deep understanding of user behaviors, needs, and pain points, informing my design decisions.',
  },
  {
    title: 'Whats your approach to user research?',
    desc: 'My user research approach involves a mix of quantitative and qualitative methods, including surveys, interviews, usability testing, and analytics review. This ensures a deep understanding of user behaviors, needs, and pain points, informing my design decisions.',
  },
  {
    title: 'Do you have experience with accessibility design?',
    desc: 'Yes, I prioritize accessibility in all my designs, ensuring that digital products are usable by everyone, including people with disabilities. I follow WCAG guidelines and use accessibility testing tools to make sure my designs meet required standards.',
  },
  {
    title: 'How do you manage deadlines and project timelines?',
    desc: 'Effective time management and clear communication are key. I create detailed project plans with milestones and deliverables, regularly updating stakeholders on progress. I use project management software to track timelines and prioritize tasks efficiently.',
  },
  {
    title: 'Whats your experience with cross-cultural design?',
    desc: 'I understand the importance of creating designs that resonate across different cultures. My approach includes researching cultural nuances, conducting international usability testing, and ensuring that content is easily adaptable for localization.',
  },
];

const skillsData = [
  {
    title: 'HTML5/CSS3',
  },
  {
    title: 'Javascript',
  },
  {
    title: 'CSS Frameworks',
  },
  {
    title: 'React Js',
  },
  {
    title: 'API',
  },
  {
    title: 'UI/UX Desgin (Basics)',
  },
];
export const mockData = {
  proejctData,
  servicesData,
  experienceData,
  faqData,
  skillsData,
};
