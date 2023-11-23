import React from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Timeline from '../components/Timeline';
import FullPage from '../components/FullPage';

const GET_TIMELINE_ENTRIES = gql`
  query {
    experience {
      position
      company
      startDate
      endDate
      entries
      technologies
    }
  }
`;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_TIMELINE_ENTRIES,
  });

  const entries = data.experience.map((experience) => ({
    title: experience.position,
    date: `${experience.startDate} - ${experience.endDate}`,
    description: experience.entries.join('\n'),
  }));

  return {
    props: {
      entries,
    },
  };
};

const Home = ({ entries }) => (
  <div>
    <div>
      <FullPage />
    </div>
    <hr />
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Timeline entries={entries} />
      </div>
    </div>
  </div>
);

export default Home;