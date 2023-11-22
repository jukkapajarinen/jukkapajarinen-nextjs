const { ApolloServer, gql } = require('apollo-server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const resumeData = require('./resumeData.json');

const typeDefs = gql`
  type PersonalInfo {
    name: String
    email: String
    phone: String
    address: String
  }

  type Education {
    degree: String
    school: String
    graduationYear: Int
  }

  type Experience {
    position: String
    company: String
    startDate: String
    endDate: String
    responsibilities: [String]
  }

  type Project {
    title: String
    description: String
    technologies: [String]
  }

  type Query {
    personalInfo: PersonalInfo
    education: [Education]
    experience: [Experience]
    skills: [String]
    projects: [Project]
  }
`;

const resolvers = {
  Query: {
    personalInfo: () => resumeData.personalInfo,
    education: () => resumeData.education,
    experience: () => resumeData.experience,
    skills: () => resumeData.skills,
    projects: () => resumeData.projects,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
