'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor's degree in{' '}
        <span className="font-medium">Statistics</span> and a master's degree in{' '}
        <span className="font-medium">Computer Science</span>, I started working
        at <span className="font-bold">Amazon</span> as a software developer.
        Previously, I worked at financial service companies as consultant and
        data scientist.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        reading sci-fi novels, playing squash, and going on adventures with my
        dog.
      </p>
    </motion.section>
  );
}
