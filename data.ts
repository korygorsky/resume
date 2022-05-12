import { IconType } from 'react-icons'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';

interface WorkHistory {
    logo?: string;
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description: string;
}

interface SideProject {
    logo?: string;
    name: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    link: string;
}

interface Education {
    logo?: string;
    institution: string;
    program: string;
    startDate: Date;
    endDate?: Date;
    description: string;
}

interface Links {
    icon?: IconType;
    name: string;
    href: string;
}

interface Data {
    fullName: string;
    lookingFor: string;
    profilePicture: string;
    location: string;
    phone: string;
    email: string;
    bio: string;
    showLogos: boolean;
    workHistory: WorkHistory[];
    sideProjects?: SideProject[];
    education?: Education[];
    links?: Links[];
}

const data: Data = {
    fullName: 'Kyle Wyatt',
    lookingFor: 'Senior Front End Developer',
    profilePicture: '/avatar.jpg',
    location: 'Los Angeles, CA',
    phone: '+44 (0) 7861 888 888',
    email: 'chris@example.com',
    bio: 'I am a full-stack developer with a passion for building beautiful, responsive, and intuitive user interfaces. I have a background in design and development, and I am currently working on my portfolio as a front-end developer.',
    showLogos: true,
    workHistory: [
        {
            logo: '/company1.png',
            company: 'Maybe Inc',
            position: 'Senior Developer',
            startDate: new Date('2021-12-02'),
            description: 'I am currently working on my portfolio as a front-end developer.'
        },
        {
            company: 'Self-Employed',
            position: 'Freelance Web Developer',
            startDate: new Date('2019-01-01'),
            endDate: new Date('2021-12-01'),
            description: 'I am currently working on my portfolio as a front-end developer. I am currently working on my portfolio as a front-end developer.'
        },
        {
            company: 'IBM',
            position: 'Senior Front-End Developer',
            startDate: new Date('2017-01-01'),
            endDate: new Date('2018-12-31'),
            description: 'I am currently working on my portfolio as a front-end developer.'
        }
    ],
    sideProjects: [
        {
            name: 'Laser Skateboard',
            role: 'Chief Architect',
            startDate: new Date('2019-03-01'),
            description: 'We built an awesome skateboard that shoots lasers at your enemies.',
            link: 'https://laser-skateboard.com'
        },
        {
            name: 'Mom\'s Pyjamas',
            role: 'Web Master',
            startDate: new Date('2001-12-01'),
            endDate: new Date('2003-03-01'),
            description: 'Pyjamas are a collection of fun and practical items that are perfect for the little ones.',
            link: 'https://amazon.com/pyjamas'
        }
    ],
    education: [
        {
            institution: 'Waterloo University',
            program: 'Information Technology',
            startDate: new Date('2016-09-01'),
            endDate: new Date('2020-04-01'),
            description: 'Learned lots about technology and how to use it to solve problems.'
        },
        {
            institution: 'Mary-ann\'s School of Cooking',
            program: 'Culinary Arts',
            startDate: new Date('2003-09-01'),
            endDate: new Date('2006-04-01'),
            description: 'Learned how to cook and how to make friends. I learned how to be a good cook. I learned how to be a good cook.'
        }
    ],
    links: [
        {
            icon: RiGithubFill,
            name: 'Github',
            href: 'https://github.com/kylewyatt'
        },
        {
            icon: RiLinkedinBoxFill,
            name: 'LinkedIn',
            href: 'https://linkedin.com/kylewyatt'
        }
    ]
}

export default data;