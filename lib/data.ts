import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: 'Projects',
  //   hash: '#projects',
  // },
  // {
  //   name: 'Skills',
  //   hash: '#skills',
  // },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Machine Learning Engineer',
    location: 'Amazon',
    description: 'Develop sponsored ads widgets on search pages',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - Present',
  },
  {
    title: 'Software Development Engineer',
    location: 'Amazon',
    description: 'Full-stack development on ML-powered internal website',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2023',
  },
  {
    title: "Master's in Compuster Science",
    location: 'University of Waterloo',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2021',
  },
  {
    title: 'Data Scientist',
    location: 'Capital One',
    description: 'Built models to understand credit card spending patterns',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2019',
  },
  {
    title: 'Actuarial Consultant',
    location: 'Milliman',
    description: 'Performed appraisals for insurance company M&A',
    icon: React.createElement(CgWorkAlt),
    date: '2016 - 2018',
  },
  {
    title: "Bachelor's in Statistics",
    location: 'University of Waterloo',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '2011 - 2016',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
