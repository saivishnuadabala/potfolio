import caresy from '@/app/caresy.png';
import sad from '@/app/sad.png';
import { Company } from '@/types';
import company1 from '@/app/cracku_port.jpg';
import company2 from '@/app/micro1.png';
import company3 from '@/app/thub_port.png';
import company4 from '@/app/intenrpe.jpeg';

export const companies: Company[] = [
    {
        name: 'Cracku',
        role: 'Software Developer',
        logo: company1, // replace if you have logo
        slug: 'https://cracku.in/',
        tags: ['Django', 'Full Stack', 'AWS', 'Performance'],
        description:
            'Developing and maintaining the company’s core product platform with a focus on performance, scalability, and user experience. Worked across frontend and backend (Django) to ship new features, fix critical issues, and improve system reliability. Actively involved in deployment, monitoring, and scaling the application on AWS.',
    },
    {
        name: 'micro1',
        role: 'Software Engineer (US Contract)',
        logo: company2, // replace if you have logo
        slug: 'https://www.micro1.ai/',
        tags: ['LLMs', 'Model Training', 'Data Processing', 'Optimization'],
        description:
            'Worked on training and optimizing Large Language Models (LLMs) for a US-based client. Improved model accuracy and performance through data preprocessing and fine-tuning techniques. Applied strong problem-solving skills to optimize training pipelines, reducing training time by nearly 20%. Collaborated closely with cross-functional teams and delivered high-quality results under tight deadlines.',
    },
    {
        name: 'THub',
        role: 'Software Developer Intern',
        logo: company3, // replace if you have logo
        slug: 'https://technicalhub.io/',
        tags: ['Frontend', 'Backend', 'DSA', 'Problem Solving'],
        description:
            'Worked as a software developer intern contributing to both frontend and backend development. Solved Data Structures and Algorithms problems to strengthen problem-solving skills. Gained hands-on experience in building and debugging real-world applications while working closely with mentors and peers.',
    },
    {
        name: 'InternPE',
        role: 'Frontend Developer Intern',
        logo: company4, // replace if you have logo
        slug: 'https://internpe.in/',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
        description:
            'Worked as a frontend developer focusing on building clean, responsive, and user-friendly interfaces. Converted designs into functional web pages and improved UI consistency across devices. Strengthened fundamentals of frontend development and best practices.',
    },
];

export const getCompanyBySlug = (slug: string): Company | undefined => {
    return companies.find(company => company.slug === slug);
};
