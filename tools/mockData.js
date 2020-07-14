const auctions = [
  {
    id: 1,
    description: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    seller: 1,
    category: 5,
  },
  {
    id: 2,
    description: "React: The Big Picture",
    slug: "react-big-picture",
    seller: 1,
    category: 10,
  },
  {
    id: 3,
    description: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    seller: 1,
    category: 1,
  },
  {
    id: 4,
    description: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    seller: 1,
    category: 2,
  },
  {
    id: 5,
    description: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    seller: 1,
    category: 1,
  },
  {
    id: 6,
    description: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    seller: 1,
    category: 7,
  },
  {
    id: 7,
    description: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    seller: 1,
    category: 6,
  },
  {
    id: 8,
    description: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    seller: 1,
    category: 6,
  },
  {
    id: 9,
    description: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    seller: 1,
    category: 4,
  },
  {
    id: 10,
    description: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    seller: 1,
    category: 8,
  },
];

const users = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const categories = [
  { id: 1, name: "Clothes" },
  { id: 2, name: "Furniture" },
  { id: 3, name: "Baby stuff" },
  { id: 4, name: "Hobbies" },
  { id: 5, name: "Electronics" },
  { id: 6, name: "PC & Games" },
  { id: 7, name: "Accessories" },
  { id: 8, name: "Vehicles" },
  { id: 9, name: "Appliances" },
  { id: 10, name: "Misc" },
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
  categories,
};
