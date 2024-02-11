// Import the necessary modules
import React from 'react';
import Pages from './components/Pages'

// Define the default metadata for your component
export default {
  title: 'Your Component/Pages', // Change this to your desired title
  component: Pages,
};

// Define a template for the component's stories
const Template = (args) => <Pages {...args} />;

// Define the actual stories
export const Default = Template.bind({});
Default.args = {
  // Add any props you want to pass to the component
};
