const auctions = [
  {
    id: 1,
    description: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    seller: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    description: "React: The Big Picture",
    slug: "react-big-picture",
    seller: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    description: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    seller: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    description: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    seller: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    description: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    seller: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    description: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    seller: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    description: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    seller: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    description: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    seller: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    description: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    seller: 1,
    category: "Career",
  },
  {
    id: 10,
    description: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    seller: 1,
    category: "HTML5",
  },
];

const users = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newAuction = {
  id: null,
  description: "",
  seller: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newAuction,
  auctions,
  users,
};
