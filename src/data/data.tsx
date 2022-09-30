import {
  AcademicCapIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import SteamIcon from '../components/Icon/SteamIcon';
import heroImage from '../images/header-back04.jpg';
import InterestsImage1 from '../images/interests/interest-1.jpg';
import InterestsImage2 from '../images/interests/interest-2.jpg';
import InterestsImage3 from '../images/interests/interest-3.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic02.jpg';
import testimonialImage from '../images/testimonial02.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  InterestsItem,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Home',
  About: 'About',
  Contact: 'Contact',
  Portfolio: 'Portfolio',
  Interest: 'Interests',
  Resume: 'Career',
  Skills: 'Skills',
  Stats: 'Stats',
  Testimonials: 'Mottos',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Kathleen Xu`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am passionate about <strong className="text-stone-200">space exploration</strong> and my dream is to develop commercial spaceflights and
        enable humans traveling to deep space in the near future.
       </p>
    </>
  ),
  actions: [
    {
      // TODO: Change href to the location of resume.html
      href: 'https://drive.google.com/file/d/173OySfhyYuemg8mOi7ATZoit4lme5e6F/view?usp=sharing',
      text: 'Resume',
      primary: false,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:(
  // TODO: Add space and change lines
      "I am a second year M.S. student at MIT AeroAstro.My past research focused on safe \n" +
      "resilient control for autonomous systems and optimization in facility placement \n" +
      "problems. My career objective is to work around the areas of guidance, navigation, \n" +
      "and control to provide safe solutions to challenging problems in real-world space missions. \n " +
      "I received my B.S. in Aerospace Engineering from University of Illinois Urbana-Champaign in 2021. \n" +
      "\n" +
      "In my free time, you can find me playing hard-core video games, watching soccer, writing chinese \n" +
      "calligraphy, or exploring Bilibili."
  ),
  aboutItems: [
    {label: 'Location', text: 'Boston, MA', Icon: MapIcon},
    // {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'U.S.', Icon: FlagIcon},
    {label: 'Interests', text: 'Video games, Soccer, Calligraphy', Icon: SparklesIcon},
    {label: 'Affiliation', text: 'Massachusetts Institute of Technology', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Massachusetts Institute of Technology', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'Japanese',
        level: 2,
      },
    ],
  },
  {
    name: 'Programming',
    skills: [
      {
        name: 'MATLAB',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'C',
        level: 6,
      },
        {
        name: 'C++',
        level: 6,
      },
        {
        name: 'Arduino',
        level: 6,
      },
        {
        name: 'HTML',
        level: 5,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Siemens NX',
        level: 10,
      },
      {
        name: 'Simulink',
        level: 9,
      },
      {
        name: 'OpenRocket',
        level: 9,
      },
        {
        name: 'ANSYS Workbench',
        level: 8,
      },
        {
        name: 'Mathematica',
        level: 7,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'LaTeX',
        level: 10,
      },
      {
        name: 'Linux',
        level: 9,
      },
        {
        name: 'PyTorch',
        level: 9,
      },
      {
        name: 'ROS',
        level: 6,
      },
        {
        name: 'Git',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: porfolioImage11,
  },
];

/**
 * Interests section
 */
export const interestsItems: InterestsItem[] = [
  {
    title: 'Interest 1',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: InterestsImage1,
  },
  {
    title: 'Interest 2',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: InterestsImage2,
  },
  {
    title: 'Interest 3',
    description: 'Give a short description of your project here.',
    url: 'https://404.com',
    image: InterestsImage3,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Now',
    location: 'Massachusetts Institute of Technology',
    title: 'M.S. in Aeronautics and Astronautics',
    content: <p>Working hard on my degree now :) </p>,
  },
  {
    date: '2017-2021',
    location: 'University of Illinois Urbana-Champaign',
    title: 'B.S. in Aerospace Engineering',
    content: <p>GPA: 4.0/4.0, graduated with Highest Honor and Bronze Tablet Honor</p>,
  },
];

export const experience: TimelineItem[] = [
    {
    date: '2021-2022',
    location: 'Graduate Researcher',
    title: 'Reliable Autonomous Systems Lab',
    content: (
      <p>
        Dr. Chuchu Fan
      </p>
    ),
  },
    {
    date: '2019-2021',
    location: 'Undergraduate Research Assistant',
    title: 'Learning, Decision, Control, Autonomy Group',
    content: (
      <p>
        Dr. Melkior Ornik
      </p>
    ),
  },
    {
    date: '2019-2021',
    location: 'Undergraduate Research Assistant',
    title: 'Putnam Research Group',
    content: (
      <p>
        Dr. Zachary Putnam
      </p>
    ),
  },
  {
    date: '2019',
    location: 'Undergraduate Research Assistant',
    title: 'Space Systems Design Lab',
    content: (
      <p>
        Dr. Koki Ho
      </p>
    ),
  },

];

export const work: TimelineItem[] = [
  {
    date: 'Next year',
    location: 'American Systems',
    title: 'Associate Aerospace Engineer',
    content: <p> A potential offer :) </p>,
  },

];

export const leadership: TimelineItem[] = [
  {
    date: '2022',
    location: 'Graduate Mentor',
    title: 'MIT Undergraduate Research Opportunities Program',
    content: <p></p>,
  },
];

export const awards: TimelineItem[] = [
  {
    date: '2021-2024',
    location: 'Massachusetts Institute of Technology',
    title: 'Yao T. Li Fellowship',
    content: <p></p>,
  },

    {
    date: '2020',
    location: 'University of Illinois Urbana-Champaign',
    title: 'Dallas Illini Club Scholarship',
    content: <p></p>,
  },

    {
    date: '2019',
    location: 'University of Illinois Urbana-Champaign',
    title: 'Lee H. Sentman Memorial Scholarship',
    content: <p></p>,
  },

    {
    date: '2017-2018',
    location: 'University of Illinois Urbana-Champaign',
    title: 'Richard R. Sladek Scholarship',
    content: <p></p>,
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dante Alighieri',
      text: ' Be as a tower, that, firmly set.\n' +
          'Shakes not its top for any blast that blows.',
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Stephen Hawking',
      text: 'Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8yE6uPFp3l_co3mkhQLa9PmNysd4Db7YMA&usqp=CAU',
    },
    {
      name: ' Hermann Hesse',
      text: 'That is where my dearest and brightest dreams have ranged — to hear for the duration of a heartbeat the universe and the totality of life in its mysterious, innate harmony.',
      image: 'data:image/jpeg;base64,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',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Contact',
  description: 'Have any questions about me? Feel free to send me an email or use the form on the left to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'bfst[at]mit.edu',
      href: 'mailto:bfst@mit.edu',
    },
    // {
    //   type: ContactType.Location,
    //   text: '70 Pacific St, Cambridge, MA',
    //   href: 'https://www.google.com/maps/place/NW86,+70+Pacific+St,+Cambridge,+MA+02139/@42.3598002,-71.1041508,17z/data=!3m1!4b1!4m5!3m4!1s0x89e379fe1dc4c8d5:0xaab0f42eb048e453!8m2!3d42.3598002!4d-71.1019621',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
    //   {
    //   type: ContactType.Phone,
    //   text: '469-344-5271',
    //   href: '',
    // },
    //   {
    //   type: ContactType.LinkedIn,
    //   text: 'Kathleen\'s Linkedin',
    //   href: 'https://www.linkedin.com/in/kathleen-shiyin-xu/',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GoogleScholar', Icon: GoogleScholarIcon, href: 'https://scholar.google.com/citations?user=d-zoJD0AAAAJ&hl=en'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kathleen-shiyin-xu/'},
  {label: 'Steam', Icon: SteamIcon, href: 'https://steamcommunity.com/id/boversten21/'},
];
