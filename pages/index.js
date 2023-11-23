import React from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Timeline from '../components/Timeline';
import Hero from '../components/Hero';
import Navbar from '@/components/Navbar';

const GET_TIMELINE_ENTRIES = gql`
  query {
    experience {
      company
      endDate
      entries
      position
      startDate
      technologies
    }
    education {
      endDate
      entries
      school
      startDate
    }
  }
`;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_TIMELINE_ENTRIES,
  });

  const experiences = data.experience.map((experience) => ({
    title: `${experience.position} - ${experience.company}`,
    date: `${experience.startDate} - ${experience.endDate}`,
    content: experience.entries,
    badges: experience.technologies,
  }));

  const educations = data.education.map((education) => ({
    title: `${education.school}`,
    date: `${education.startDate} - ${education.endDate}`,
    content: education.entries
  }));

  return {
    props: {
      experiences,
      educations,
    },
  };
};

const Home = ({ experiences, educations }) => (
  <div className="min-h-screen bg-gray-100 text-gray-800">
    <div className="p-6 space-y-8 pb-20 lg:pb-80">
      <Navbar/>
      <main className="container mx-auto space-y-16">
        <Hero />
        <section className="bg-gray-100 text-gray-800">
          <h2 className="text-5xl font-bold lg:text-center text-gray-900">Ansioluettelo</h2>
          <span className="block mt-6 text-sm font-medium tracki uppercase lg:text-center text-teal-600">Työ ja projektihistoria</span>
          <Timeline entries={experiences} />
          <span className="block mt-16 text-sm font-medium tracki uppercase lg:text-center text-teal-600">Koulutushistoria</span>
          <Timeline entries={educations} />
        </section>
      </main>
    </div>
  </div>
);

export default Home;