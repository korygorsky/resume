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

interface Data {
    fullName: string;
    lookingFor: string;
    profilePicture: string;
    location: string;
    phone: string;
    email: string;
    bio: string;
    workHistory: WorkHistory[];
    sideProjects?: SideProject[];
    education?: Education[];
}

const data: Data = {
    fullName: 'Steven Wyatt',
    lookingFor: 'Senior Front End Developer',
    profilePicture: '/avatar.jpg',
    location: 'Los Angeles, CA',
    phone: '+44 (0) 7861 888 888',
    email: 'chris@example.com',
    bio: 'I am a full-stack developer with a passion for building beautiful, responsive, and intuitive user interfaces. I have a background in design and development, and I am currently working on my portfolio as a front-end developer.',
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
    sideProjects: []
}

export default data;