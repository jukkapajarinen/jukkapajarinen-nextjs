import React from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Timeline from '../components/Timeline';
import Navbar from '../components/Navbar';

const GET_TIMELINE_ENTRIES = gql`
  query {
    experience {
      position
      company
      startDate
      endDate
      responsibilities
    }
  }
`;

const Home = ({ entries }) => (
  <div>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Timeline entries={entries} />
    </div>
  </div>
);

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_TIMELINE_ENTRIES,
  });

  const entries = data.experience.map((experience) => ({
    title: experience.position,
    date: `${experience.startDate} - ${experience.endDate}`,
    description: experience.responsibilities.join('\n'),
  }));

  return {
    props: {
      entries,
    },
  };
};

export default Home;