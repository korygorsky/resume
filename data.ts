import { IconType } from 'react-icons'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';

interface WorkHistory {
    logo?: string;
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    accomplishments?: string[];
    skills?: string[];
}

interface SideProject {
    logo?: string;
    name: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    link: string;
    accomplishments?: string[];
    skills?: string[];
}

interface Education {
    logo?: string;
    institution: string;
    program: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    accomplishments?: string[];
    skills?: string[];
}

interface Links {
    icon?: IconType;
    name: string;
    href: string;
}

export interface PotentialEmployer {
    companyName: string;
    salutation?: string;
    shortIntro: string;
    reasons?: string[];
}

interface PotentialEmployers {
    [name: string] : PotentialEmployer
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
    potentialEmployers?: PotentialEmployers;
}

const data: Data = {
    fullName: 'Stevey Wyatt',
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
            description: 'He swung back the fishing pole and cast the line which ell 25 feet away into the river. The lure landed in the perfect spot and he was sure he would soon get a bite. He never expected that the bite would come from behind in the form of a bear.',
            accomplishments: [
                'Created a new website for a local business',
                'Was able to rebrand the entire experience',
                'Created a new website for a local business',
            ],
            skills: [
                'HTML',
                'CSS',
                'JavaScript',
            ]
        },
        {
            company: 'Self-Employed',
            position: 'Freelance Web Developer',
            startDate: new Date('2019-01-01'),
            endDate: new Date('2021-12-01'),
            description: 'They had no proof. He knew that they knew he had done it but they didn\'t have any proof. It was a huge distinction and it was the difference between him keeping his freedom or being locked away for decades. They continued to question him, probing him for information that they could use against him or find the proof they needed to put him away. He smiled and continued to block their every inquiry by feigning his innocence for a crime they all knew he committed.'
        },
        {
            company: 'IBM',
            position: 'Senior Front-End Developer',
            startDate: new Date('2017-01-01'),
            endDate: new Date('2018-12-31'),
            description: 'It probably seemed trivial to most people, but it mattered to Tracey. She wasn\'t sure why it mattered so much to her, but she understood deep within her being that it mattered to her. So for the 365th day in a row, Tracey sat down to eat pancakes for breakfast.'
        }
    ],
    sideProjects: [
        {
            name: 'Laser Skateboard',
            role: 'Chief Architect',
            startDate: new Date('2019-03-01'),
            description: 'We built an awesome skateboard that shoots lasers at your enemies.',
            link: 'https://laser-skateboard.com',
            skills: [
                'Engineering',
                'Industrial Design'
            ]
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
    ],
    potentialEmployers: {
        'netflix': {
            companyName: 'Netflix',
            salutation: 'Dear Sally Wentsworth',
            shortIntro: 'I\'m really interested in the future of streaming media. Netflix has been somewhere that I\'ve always wanted to work. I\'d be very excited for any opportunity available.',
            reasons: [
                'I\'m a huge Netflix fan',
                'I watch Bridgerton every night',
            ]
        }
    }
}

export default data;