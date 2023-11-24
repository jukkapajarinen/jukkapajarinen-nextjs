import React from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Timeline from '../components/Timeline';
import Hero from '../components/Hero';
import Navbar from '@/components/Navbar';
import moment from 'moment';

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

const calculateMonths = (endDate, startDate) => {
  let end = moment(endDate, "MM/YYYY").endOf('month');
  let start = moment(startDate, "MM/YYYY");
  let monthDiff = Math.ceil(end.diff(start, "months", true));
  return monthDiff;
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_TIMELINE_ENTRIES,
  });

  const experiences = [...data.experience].sort((a, b) => moment(b.endDate, "MM/YYYY") - moment(a.endDate, "MM/YYYY")).map((experience) => ({
      title: `${experience.position} - ${experience.company}`,
      date: `${experience.startDate} - ${experience.endDate}`,
      duration: `${calculateMonths(experience.endDate, experience.startDate)}`,
      content: experience.entries,
      badges: experience.technologies,
  }));

  const educations = [...data.education].sort((a, b) => moment(b.endDate, "MM/YYYY") - moment(a.endDate, "MM/YYYY")).map((education) => ({
      title: `${education.school}`,
      date: `${education.startDate} - ${education.endDate}`,
      duration: `${calculateMonths(education.endDate, education.startDate)}`,
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